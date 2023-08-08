const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
});

// Define a virtual for the genre's URL
genreSchema.virtual('url').get(function () {
  return `/genres/${this._id}`;
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
