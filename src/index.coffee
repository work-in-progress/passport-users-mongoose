
mongoose = require 'mongoose'
mongooseTypes = require "mongoose-types"
#_ = require "underscore"

require('pkginfo')(module,'version')

###*
Encapsulates the primary functionality for this module.
###
class exports.PassportUsersMongoose

  ###*
  Initializes a new instance of the @see PassportUsersMongoose class.
  ###
  constructor: (opts = {}) ->
    @entityInfos = {}
    
    
