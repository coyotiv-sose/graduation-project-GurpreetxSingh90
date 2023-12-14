const axios = require('axios')
const { response } = require('./app')

console.log("Hi coyote, let's have some JavaScript fun!")

// Fetch users with axios
axios.get('http://localhost:3000/users').then(response => {
  console.log(response.data)
})

// create a user with axios

axios
  .post('https://localhost:3000/users', {
    name: 'Gurpreet',
  })
  .then(response => {
    console.log(response.data)
  })
