mongoose = require 'mongoose'
mongooseTypes = require "mongoose-types"

module.exports = LoginHistorySchema = new mongoose.Schema
  'token' : 
    type : String
    trim: true

LoginHistorySchema.plugin mongooseTypes.useTimestamps
