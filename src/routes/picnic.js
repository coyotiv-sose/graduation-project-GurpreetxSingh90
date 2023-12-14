var express = require('express')
const Picnic = require('../user')
var router = express.Router()

/* Get users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
})
/* Create a new user. */
router.post('/', function (req, res, next) {
  const user = User.create({ name: req.body.name })

  res.send(user)
})

module.exports = router
