const Community = require('./community')
const Post = require('./post')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  communities: [String],
  posts: [String],
  comments: [String],
})

class User {
  // Initializing instance properties
  // posts = []
  // communities = []
  // comments = []
  // // Constructor for the User class
  // constructor(name, email, age) {
  //   this.name = name
  //   this.email = email
  //   this.age = age
  // }

  // Method for a user to share a post
  sharePost(image, description) {
    // Create a new Post instance with the provided image and description
    const post = new Post(description, image)
    // Add the created post to the user's posts array
    this.posts.push(post)
    return post
  }

  // Method for a user to join a community
  joinCommunity(community) {
    // Add the user to the community's members array
    community.members.push(this)
    // Add the community to the user's communities array
    this.communities.push(community.name)
    return community
  }

  // Method for a user to leave a community
  leaveCommunity(community) {
    // Remove the user from the community's members array
    community.members.splice(this)
    // Remove the community from the user's communities array
    this.communities.splice(community)
    return community
  }

  // Method for a user to add a comment
  addComment(text, author) {
    // Create a new Comment instance with the provided text and author
    const newComment = new Comment(text, author)
    // Add the created comment to the user's comments array
    this.comments.push(newComment)
    return newComment
  }

  // Static method to create a new User instance and add it to the list
  static create({ name, email, age }) {
    // Create a new User instance with the provided information
    const newUser = new User(name, email, age)
    // Add the newly created User instance to the list
    User.list.push(newUser)

    return newUser
  }
  // Static property to store a list of all created User instances
  static list = []
}
// Add method to share Images to User method
// module.exports = User
module.exports = mongoose.model('User', userSchema)
