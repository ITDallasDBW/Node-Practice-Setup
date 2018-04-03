const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const passport = require('passport')

router.use(passport.authenticate('jwt'))

router.use(bodyParser.json())

router.post('/', (req, res) => {
  console.log(req.body);

  // put the data ie req.body.name into the database
  // using Mongoose
})


module.exports = router
