// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

/*

import passport from 'passport'
import nextConnect from 'next-connect'
const BnetStrategy = require('passport-bnet').Strategy

const method = 'bnet'

passport.use(new BnetStrategy({
  clientID: 'ec3d652e11ed4b0697903ae5dd91ee8f',
  clientSecret: 'RJpZa8P0tvBaYQP7I3KHiRtorAUHZaig',
  callbackURL: "https://smooth-jellyfish-96.loca.lt/api/connect/callback",
  region: "us"
}, function(accessToken, refreshToken, profile, done) {
  console.log('===> ', accessToken, refreshToken, profile)
  return done(null, profile)
}))

export default nextConnect()
  .use(passport.initialize())
  .get(async (req, res) => {
    try {
      console.log('try to autenticate')
      // passport.authenticate('bnet')
      passport.authenticate(method, { session: false }, (error, result) => {
        if (error) {
          console.log('error on passport request', error)
          res.status(401).send(error.message)
        }
        console.log('passport result', result)
        res.status(200).send({ done: true })
      })
    } catch (error) {
      console.error(error)
      res.status(401).send(error.message)
    }
  })


 */
