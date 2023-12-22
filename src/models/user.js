const Community = require('./community')
const Post = require('./post')

class User {
  posts = []
  communities = []
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

  joinCommunity(community) {
    community.members.push(this)
    this.communities.push(community)
    return community
  }

  leaveCommunity(community) {
    community.members.splice(this)
    this.communities.splice(community)
    return community
  }

  static create({ name, email, age }) {
    const newUser = new User(name, email, age)

    User.list.push(newUser)

    return newUser
  }

  static list = []
}
// Add method to share Images to User method
module.exports = User
