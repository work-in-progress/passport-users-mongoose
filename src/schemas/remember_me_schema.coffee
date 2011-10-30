mongoose = require 'mongoose'
mongooseTypes = require "mongoose-types"

module.exports = RememberMeSchema = new mongoose.Schema
  'token' : 
    type : String
    trim: true

RememberMeSchema.plugin mongooseTypes.useTimestamps
