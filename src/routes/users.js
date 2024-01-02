var express = require('express')
var router = express.Router()
const User = require('../models/user')
const { restart } = require('nodemon')
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
  User.create({ name, email, age })
  // Sending the newly created user as the response
  // res.send(newUser)
  res.sendStatus(200)
})

/* Delete a User*/

router.delete('/:userName', function (req, res, next) {
  // const statuscode = 200
  const userIndex = User.list.findIndex(user => user.name === req.params.userName)
  if (userIndex == -1) {
    return next({
      status: 404,
      message: 'user not found',
    })
  }
  User.list.splice(userIndex, 1)
  // const deleteUser = User.delete({ name, email, age })
  res.sendStatus(200)
})

// HTTP GET route handler for update a user

router.put('/:userName', function (req, res, next) {
  const userIndex = User.list.findIndex(user => user.name === req.params.userName)
  if (userIndex == -1) {
    return next({
      status: 404,
      message: 'user not found',
    })
  }
  const { name, email, age } = req.body
  User.list[userIndex] = { name, email, age }
  res.sendStatus(200)
})

// HTTP GET route handler for getting a single user

router.get('/:userName', function (req, res, next) {
  const userIndex = User.list.findIndex(user => user.name === req.params.userName)
  if (userIndex == -1) {
    return next({
      status: 404,
      message: 'user not found',
    })
  }
  res.send(User.list[userIndex])
})

module.exports = router
