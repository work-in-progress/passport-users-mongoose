(function() {
  var ProfileSchema, mongoose, mongooseTypes;
  mongoose = require('mongoose');
  mongooseTypes = require("mongoose-types");
  module.exports = ProfileSchema = new mongoose.Schema({
    'provider': {
      type: mongooseTypes.Email,
      lowercase: true,
      trim: true,
      index: true,
      required: true
    },
    'isVerified': {
      type: Boolean,
      "default": false
    },
    'verficationToken': {
      type: String
    },
    'verficationSentAt': {
      type: Date
    }
  });
  ProfileSchema.plugin(mongooseTypes.useTimestamps);
}).call(this);
