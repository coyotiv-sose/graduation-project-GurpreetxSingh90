class Image {
  constructor(path, format, height, width) {
    this.path = path
    this.format = format
    this.height = height
    this.width = width
  }

  storePrediction(image, path) {}
}

module.exports = Image
