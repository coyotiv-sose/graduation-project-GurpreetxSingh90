const axios = require('axios')

console.log("Hi coyote, let's have some JavaScript fun!")

// Fetch users with axios
/* axios.get('http://localhost:3000/users').then(response => {
  console.log(response.data)
}) */

// create a user with axios
//An asynchronous function delivers its result asynchronously
// for example, a callback-based function or a Promise-based function.
// Promise constructor takes only one argument
// Callback function takes two arguments, resolve and reject.

async function main() {
  // Create an Axios instance with a base URL
  const client = await axios.create({
    baseURL: 'http://localhost:3000',
  })

  // Use the client to make a POST request to create a new user named Gurpreet
  const gurpreet = await client.post('/users', {
    name: 'gurpreet',
    email: 'gurpreet@xyz.com',
    age: 33,
  })

  const numan = await client.post('/users', {
    name: 'numan',
    email: 'numan@xyz.com',
    age: 30,
  })

  const ingrid = await client.post('/users', {
    name: 'ingrid',
    email: 'ingrid@xyz.com',
    age: 33,
  })

  // console.log(gurpreet.data)
  await client.get('/users').then(response => console.log('all Users before delete', response.data))
  // // await client.delete('/users/gurpreet')

  // await client.get('/users').then(response => console.log('allUsersResponse', response.data))

  // // Use the client to make a PUT request to update a user age named Ingrid
  // const updateingrid = await client.put('/users/ingrid', {
  //   updatedUserData: { age: 37 },
  // })

  // // Use the client to make a GET request to get a single user named Ingrid
  // const singleUserResponse = await client.get('/users/ingrid')
  // console.log(singleUserResponse.data)

  // //create a post
  // const gurpreetsFirstPost = await client.post('/users/gurpreet/posts', {
  //   image: 'image',
  //   description: 'test description',
  // })
  // console.log('gurpreetsFirstPost: ', gurpreetsFirstPost.data)
  // // Use the client to make a GET request to get all users
  // const allUsersResponse = await client.get('/users')
  // console.log(allUsersResponse.data)
}

// Call the main function to execute the asynchronous code
main()

// const User = require('../user')
// const Image = require('./src/models/image')
// const Prediction = require('../prediction')
// const Community = require('./src/models/community')
// const Comment = require('./src/models/comment')
// const Post = require('./src/models/post')

// const gurpreet = new User('Gurpreet', 'gurpreetxsingh90@gmail.com', '33')
// const numan = new User('Numan', 'xyz@Gamepad.com', 30)
// const imagePath =
//   'data:image/jpeg;base64,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'

// const gurpreetImage = new Image(imagePath, 'jpeg', 1200, 800)
// const imagePrediction = new Prediction(gurpreetImage)
// const pancreasCommunity = new Community('pancreascommunity', 'pancreascommunity to discuss cancer stages', 'Admin')
// const myPost = new Post('new post from hamburg', imagePath)
// myPost.addComment('Hamburg you beauty', 'gurpreet')
// console.log('gurpreet has added new comment:', 'Hamburg you beauty')

// imagePrediction.predImage(imagePath, 1200, 800)

// gurpreet.joinCommunity(pancreasCommunity)

// numan.joinCommunity(pancreasCommunity)

// gurpreet.leaveCommunity(pancreasCommunity)

// console.log('gurpreet has joined community:', gurpreet.communities)
// console.log(
//   'Pancreas Community has two member named as Gurpreet and Numan:',
//   pancreasCommunity.members.map(member => member.name)
// )
// console.log('gurpreet has one post from posts list: ', gurpreet.posts.length)
// console.log('gurpreet would like to leave community:', gurpreet.communities)
// /* //function sum(num1, num2) {
//   return num1 + num2
// }
// console.log(sum(1, 2)) */
