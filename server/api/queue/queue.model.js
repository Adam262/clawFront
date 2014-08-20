'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    UserSchema = mongoose.model('User');

var QueueSchema = new Schema({
  UserId: ObjectId,
  username: String,
  index: String,
  isPaid: {type: Boolean, default: false},
  active: {type: Boolean, default: false}
});

module.exports = mongoose.model('Queue', QueueSchema);