const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    email: {
        type: String,
        unique: [true, "email already exists !"],
        required: [true, "email is required !"],
      },
      username: {
        type: String,
        unique: [true, "username already exists !"],
        required: [true, "username is required !"],
        match: [
          /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
          "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
        ],
      },
      image: {
        type: String,
      },
      comments: [
        {
          type: Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
    }
)

module.exports = mongoose.model('User', User)