var express = require('express')
var router = express.Router()
const User = require('../models/user')

// HTTP POST route handler to create a new community
router.post('/', async function (req, res, next) {
  //Find the user with object ID
  const user = await User.findById(req.body.userId)
  console.log('user : ', user)
  // If the user is not found, return a 404 error with a message
  if (!user) {
    return next({
      status: 404,
      message: 'user not found',
    })
  }
  // Create a new community using the Community mongoose model
  const newCommunity = await user.createCommunity(req.body.name, req.body.description)
  // Send a 200 OK response to indicate success
  res.send(newCommunity)
})
module.exports = router
