const Comment = require('./comment')

class Post {
  comments = []
  constructor(description, imagepath) {
    this.description = description
    this.imagepath = imagepath
  }

  addComment(text, author) {
    const newComment = new Comment(text, author)
    this.comments.push(newComment)
    return newComment
  }
}

module.exports = Post
