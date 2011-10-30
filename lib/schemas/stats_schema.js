(function() {
  var StatsSchema, mongoose, mongooseTypes;
  mongoose = require('mongoose');
  mongooseTypes = require("mongoose-types");
  module.exports = StatsSchema = new mongoose.Schema({
    'loginCount': {
      type: Integer,
      "default": 0
    }
  });
  StatsSchema.plugin(mongooseTypes.useTimestamps);
}).call(this);
