var express = require('express')
var router = express.Router()
const User = require('../models/user')
const users = [{ name: 'John Doe' }, { name: 'Jane' }]
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
})
/*  res.render('users', {
    user: {
      name: 'John Doe',
    },
    users: [{ name: 'John Doe' }, { name: 'Jane' }],
  })
}) */

/* Create a new user */
// HTTP POST route handler for creating a new user
router.post('/', function (req, res, next) {
  // Extracting user data (name, email, age) from the request body
  const { name, email, age } = req.body
  // Creating a new user using the static create method from the User class
  const newUser = User.create({ name, email, age })
  // Sending the newly created user as the response
  res.send(newUser)
})
module.exports = router
