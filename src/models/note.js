const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    createdAt: {
        type: Date,
        default: Date.now,
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    favoriteCount: {
      type: Number,
      default: 0
    },
    favoritedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    timestamps: true
  }
);
const Note = mongoose.model('Note', noteSchema);
module.exports = Note;