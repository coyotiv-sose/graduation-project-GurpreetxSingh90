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

// HTTP PUT route handler for update a user

// Define a route for updating user data by userName
router.put('/:userName', function (req, res, next) {
  // Find the index of the user in the list based on the provided userName

  const userIndex = User.list.findIndex(user => user.name === req.params.userName)

  // If the user is not found, return a 404 error with a message
  if (userIndex == -1) {
    return next({
      status: 404,
      message: 'user not found',
    })
  }

  // Extract updated user data from the request body
  const { updatedUserData } = req.body

  // Create an updatedUser object by merging the existing user data with the updatedUserData
  const updatedUser = { ...User.list[userIndex], ...updatedUserData }

  // Replace the old user data with the updatedUser data at the specified index
  User.list.splice(userIndex, 1, updatedUser)

  // Send a success status (HTTP 200) back to the client
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
  res.send(User.list[userIndex]) //sending the user as the response
})

// HTTP GET route handler for all posts for a specific user
router.get('/:userName/posts', function (req, res, next) {
  const userIndex = User.list.findIndex(user => user.name === req.params.userName)
  if (userIndex == -1) {
    return next({
      status: 404,
      message: 'user not found',
    })
  }
  res.send(User.list[userIndex].posts)
})

// HTTP POST route handler for creating a new post for a specific user
router.post('/:userName/posts', function (req, res, next) {
  // Find the index of the user in the user list based on the provided userName

  const userIndex = User.list.findIndex(user => user.name === req.params.userName)

  // If the user is not found, return a 404 error
  if (userIndex == -1) {
    return next({
      status: 404,
      message: 'user not found',
    })
  }

  // Extract the title and content from the request body
  const { image, description } = req.body
  // Add the new post to the user's posts array
  // User.list[userIndex].posts.push({ title, content })

  const user = User.list[userIndex]

  const newPost = user.sharePost(image, description)
  // Send a 200 OK response to indicate succes
  res.send(newPost)
})

// HTTP POST route handler to join community for a specific user

router.post('/:userName/communities/:communityId', function (req, res, next) {
  // Find the index of the user in the user list based on the provided userName
  const userIndex = User.list.findIndex(user => user.name === req.params.userName)
  // If the user is not found, return a 404 error
  if (userIndex == -1) {
    return next({
      status: 404,
      message: 'user not found',
    })
  }
  // Find the index of the community in the community list based on the provided communityId
  const communityIndex = Community.list.findIndex(community => community.id === req.params.communityId)
  // If the community is not found, return a 404 error
  if (communityIndex == -1) {
    return next({
      status: 404,
      message: 'community not found',
    })
  }
  // Add the community to the user's communities array
  User.list[userIndex].communities.push(Community.list[communityIndex])
  // Send a 200 OK response to indicate success
  res.sendStatus(200)
})

// HTTP DELETE route handler to leave community for a specific user

router.delete('/:userName/communities/:communityId', function (req, res, next) {
  // Find the index of the user in the user list based on the provided userName
  const userIndex = User.list.findIndex(user => user.name === req.params.userName)
  // If the user is not found, return a 404 error
  if (userIndex == -1) {
    return next({
      status: 404,
      message: 'user not found',
    })
  }
  // Find the index of the community in the community list based on the provided communityId
  const communityIndex = Community.list.findIndex(community => community.id === req.params.communityId)
  // If the community is not found, return a 404 error
  if (communityIndex == -1) {
    return next({
      status: 404,
      message: 'community not found',
    })
  }
  // Remove the community from the user's communities array
  User.list[userIndex].communities.splice(communityIndex, 1)
  // Send a 200 OK response to indicate success
  res.sendStatus(200)
})

// GET home page

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
module.exports = router

/*
 /users -
    post=> create a new user,
    get=> fetch all users
 /users/userId -
    delete=>delete a specific user,
    put=> update the user
 /users/userId/posts -
    get=> fetch all posts

 /posts -
    post(http method)=>create a new post
 /posts/postId -
    delete=>delete a post,
    put=>update the post
 /posts/postId/comments - post=>create a comment for a post

 /communities -
    first route handler: post=>create a community,
    second route handler: get=> fetch all communities
 /communities/communitiesId -
    get
    delete
    put
  /communities/communitiesId/members
    post => to join a community
    get => fetch all members
  /communities/communitiesId/members/memberId
    delete => to leave from community
*/
