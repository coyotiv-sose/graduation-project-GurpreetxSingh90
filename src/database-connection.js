const mongoose = require('mongoose') // import mongoose tools, configuration etc.
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).
then(() => console.log('Connected to MongoDB')) // connect mongoose to your actual DB, in your code example that'd be your local MongoDB instance

// const Cat = mongoose.model('Cat', { name: String }) // use mongoose model like a Schema and define how Cat objects will be stored in the DB + autmoatically create an invisible class file for you

// const kitty = new Cat({ name: 'Pixy' }) // create a new Cat object
// kitty.save().then(() => console.log('meow')) // save the Cat object to the DB
