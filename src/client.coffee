###*
Provides a wrapper against the database and convenience functions for
easy passport hookup
###

mongoose = require 'mongoose'


class exports.Client

  ###*
  Initializes a new instance of the @see Client class.
  ###
  constructor: (@opts = {}) ->
    
  ###*
  # Performs a user look up, and returns the user object, or nil if not found
  ###
  findUser: (strategy,id,cb) =>
  
  # Creates a new user
  createUser: () =>
    