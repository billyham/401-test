const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  catchPhrase: {
    type: String
  }

});

module.exports = mongoose.model('Character', charSchema);
