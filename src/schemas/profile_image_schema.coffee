mongoose = require 'mongoose'
mongooseTypes = require "mongoose-types"

module.exports = ProfileImageSchema = new mongoose.Schema
  'imageUrl' : 
    type : mongooseTypes.Url
    lowercase: true
    trim: true
    required: true
  'isValid' :
    type : Boolean
    default : false
  #'size' :

ProfileImageSchema.plugin mongooseTypes.useTimestamps
