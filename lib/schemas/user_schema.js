(function() {
  var UserSchema, mongoose, mongooseTypes;
  mongoose = require('mongoose');
  mongooseTypes = require("mongoose-types");
  module.exports = UserSchema = new mongoose.Schema({
    'loginKeys': {
      type: Array,
      index: true,
      unique: true
    },
    'userName': {
      type: String,
      "default": "",
      lowercase: true,
      trim: true,
      index: true,
      required: true
    },
    'displayName': {
      type: String,
      "default": "",
      trim: true
    },
    'statusMessage': {
      type: String,
      "default": "",
      trim: true
    }
  });
  UserSchema.plugin(mongooseTypes.useTimestamps);
}).call(this);
