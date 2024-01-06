const Community = require('./community')
const Post = require('./post')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  communities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  comments: [], // [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
})

class User {
  async sharePost(image, description) {
    const post = await Post.create({ image, description })

    this.posts.push(post)

    await this.save()

    return post
  }

  joinCommunity(community) {
    community.members.push(this)

    this.communities.push(community.name)
    return community
  }

  leaveCommunity(community) {
    community.members.splice(this)

    this.communities.splice(community)
    return community
  }

  addComment(text, author) {
    const newComment = new Comment(text, author)

    this.comments.push(newComment)

    return newComment
  }
}

userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
