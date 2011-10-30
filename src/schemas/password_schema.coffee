mongoose = require 'mongoose'
mongooseTypes = require "mongoose-types"

module.exports = PasswordSchema = new mongoose.Schema
  'hashedPassword' : 
    type : String
    trim: true

PasswordSchema.plugin mongooseTypes.useTimestamps
