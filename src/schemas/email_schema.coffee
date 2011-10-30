mongoose = require 'mongoose'
mongooseTypes = require "mongoose-types"

module.exports = EmailSchema = new mongoose.Schema
  'email' : 
    type : mongooseTypes.Email
    lowercase: true
    trim: true
    index : true
    required: true
  'isVerified' :
    type : Boolean
    default : false
  'verficationToken' :
    type : String
  'verficationSentAt' :
    type : Date
    #default : false

EmailSchema.plugin mongooseTypes.useTimestamps
