const Comment = require('./comment')
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  description: String,
  image: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
})

class Post {
  addComment(text, author) {
    const newComment = new Comment(text, author)
    this.comments.push(newComment)
    return newComment
  }
}

postSchema.loadClass(Post)
module.exports = mongoose.model('Post', postSchema)
