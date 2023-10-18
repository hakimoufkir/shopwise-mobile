const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
        author: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: [true, "author is required."],
        },
        title: {
          type: String,
          required: [true, "title is required."],
        },
        description: {
          type: String,
          required: [true, "description is required."],
        },
        tag: {
          type: String,
          required: [true, "Tag is required."],
        },
        stars: {
          type: String,
          default: 0,
        },
        category: {
          type: String,
          required: [true, "category is required."],
        },
        images: {
          type: Array,
          required: [true, "images is required."],
        },
        lat: {
          type: Array,
          required: [true, "lat is required."],
        },
        long: {
          type: Array,
          required: [true, "long is required."],
        },
        comments: [
          {
            userId: {
              type: Schema.Types.ObjectId,
              ref: "User",
              required: [true, "userId is required."],
            },
            text: {
              type: String,
              required: [true, "Comment text is required."],
            },
            likes: {
              type: Number, // Change the type to Number
              default: 0, // Set a default value for likes
            },
            likedBy: [
              {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: [true, "likedBy is required!"],
              },
            ],
          },
          { timestamps: true },
        ],
        default: [],
      },
      { timestamps: true }
)

module.exports = mongoose.model('Post', Post)