const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a  model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength:1,
      maxLenght: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //add getter method to format the timestamp on query
    },
    reactions:[reactionSchema],
    
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);


//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema
  .virtual('reactionCount')
  .get(function(){ 
  return `${this.reactions.length}`;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
