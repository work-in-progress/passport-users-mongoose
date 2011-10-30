(function() {
  var RolesSchema, mongoose, mongooseTypes;
  mongoose = require('mongoose');
  mongooseTypes = require("mongoose-types");
  module.exports = RolesSchema = new mongoose.Schema({
    'role': {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    }
  });
  RolesSchema.plugin(mongooseTypes.useTimestamps);
}).call(this);
