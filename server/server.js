/* eslint-disable no-undef */
const express = require('express')()
const server = require('http').Server(express)
const next = require('next')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Custom WebSockets
const websockets = require('./webSockets')

// Use the BnetStrategy within Passport.
const BnetStrategy = require('passport-bnet').Strategy
const BNET_ID = process.env.BNET_ID
const BNET_SECRET = process.env.BNET_SECRET
const BNET_REDIRECT = process.env.BNET_REDIRECT

passport.use(
  new BnetStrategy(
    {
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      scope: 'd3.profile',
      callbackURL: BNET_REDIRECT,
      region: 'eu',
    },
    function(accessToken, refreshToken, profile, done) {
      return done(null, profile)
    }
  )
)

// Server modules

app.prepare().then(() => {
  // const server = express()

  // Accept all requests
  // Add headers
  express.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    )

    // Request headers you wish to allow
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    )

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
  })

  // configure server to use bodyParser()
  // this will let us get the data from a POST
  express.use(bodyParser.json())
  express.use(bodyParser.urlencoded({ extended: true }))

  // initialize cookie-parser to allow us access the cookies stored in the browser.
  express.use(cookieParser())

  express.set('trust proxy', 1) // trust first proxy

  express.use(
    session({
      secret: 'keyboardcat',
      resave: false,
      saveUninitialized: true,
      cookie: { path: '/', httpOnly: true, maxAge: 30 * 600000 },
      rolling: true,
    })
  )
  express.use(passport.initialize())
  express.use(passport.session())

  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser(function(user, done) {
    // console.log('deserializeUser', user)
    done(null, user)
  })

  // BNET AUTH ROUTING
  express.get('/api/connect/bnet', passport.authenticate('bnet', { session: false }))

  express.get(
    '/api/connect/callback',
    passport.authenticate('bnet', { failureRedirect: '/error', session: false }),
    (req, res) => {
      const days = 3 * 24 * 60 * 60 * 1000
      const auth = req.user?.auth || false
      res.cookie('user', JSON.stringify({ ...req.user, auth }), { maxAge: days, httpOnly: true })
      res.redirect('/')
    }
  )

  // ROUTING
  express.all('*', (req, res) => {
    return handle(req, res)
  })

  // Socket.io
  const io = require('socket.io')(server)
  websockets(io)

  const port = dev ? 3000 : 4001
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
