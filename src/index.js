const axios = require('axios')
const { response } = require('./app')

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
  const gurpreet = await axios.post('https://localhost:3000/users', {
    name: 'Gurpreet',
  })
  console.log(gurpreet.data)
}

main()
