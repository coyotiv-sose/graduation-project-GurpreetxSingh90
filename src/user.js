const Post = require('./post')

class User {
  posts = []
  constructor(name, email, age) {
    this.name = name
    this.email = email
    this.age = age
  }

  sharePost(image, description) {
    const post = new Post(description, image)
    this.posts.push(post) // images properties for user and pushed image into array
    return post
  }

  joinCommunity(communityname) {}
}
// Add method to share Images to User method
module.exports = User
