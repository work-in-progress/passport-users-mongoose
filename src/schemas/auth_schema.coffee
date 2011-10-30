mongoose = require 'mongoose'
mongooseTypes = require "mongoose-types"

module.exports = AuthSchema = new mongoose.Schema
  'provider' : 
    type : String
    lowercase: true
    trim: true
    index : true
    required: true

AuthSchema.plugin mongooseTypes.useTimestamps
