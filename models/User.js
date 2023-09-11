const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Reaction');

// Schema to create User model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "Username required",
      //trimmed?:,
    },
    email: {
      type: String,
      required: "Username required",
      unique: true,
      validate: 'user',
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
    friends: [
      {
        type:Schema.Types.ObjectId,
        ref:"User",
      },
    ],

  },
  {
    toJSON: {
      virtuals: true,
    },
    id:false,
  }
);


UserSchema
  .virtual('friendCount')
  .get(function () {
    return `${this.friends.length}`;
  });

const User = model('User', UserSchema);

module.exports = User;
