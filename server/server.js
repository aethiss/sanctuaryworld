/* eslint-disable no-undef */
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

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
  const server = express()

  // Accept all requests
  // Add headers
  server.use((req, res, next) => {
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
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  // initialize cookie-parser to allow us access the cookies stored in the browser.
  server.use(cookieParser())

  server.set('trust proxy', 1) // trust first proxy

  server.use(
    session({
      secret: 'keyboardcat',
      resave: false,
      saveUninitialized: true,
      cookie: { path: '/', httpOnly: true, maxAge: 30 * 600000 },
      rolling: true,
    })
  )
  server.use(passport.initialize())
  server.use(passport.session())

  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser(function(user, done) {
    // console.log('deserializeUser', user)
    done(null, user)
  })

  // BNET AUTH ROUTING
  server.get('/api/connect/bnet', passport.authenticate('bnet', { session: false }))

  server.get(
    '/api/connect/callback',
    passport.authenticate('bnet', { failureRedirect: '/error', session: false }),
    (req, res) => {
      const days = 3 * 24 * 60 * 60 * 1000
      res.cookie('user', JSON.stringify(req.user), { maxAge: days, httpOnly: true })
      res.redirect('/')
    }
  )

  // ROUTING
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const port = dev ? 3000 : 4000
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
