const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const communitySchema = new mongoose.Schema({
  name: String,
  description: String,
  contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
})
class Community {}
communitySchema.plugin(autopopulate)
module.exports = mongoose.model('Community', communitySchema)
