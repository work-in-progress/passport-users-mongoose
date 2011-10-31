###*
Provides a wrapper against the database and convenience functions for
easy passport hookup
###

mongoose = require 'mongoose'


class exports.Client

  # SchemaImports that can be overridden by custom schemas
  UserSchema: require('./schemas/user_schema')

  # Callbacks to customize
  onUserModel: (connection) ->
    connection.model("User",@UserSchema)

  _connection: () =>
    mongoose
    
        
    
  ###*
  Initializes a new instance of the @see Client class.
  ###
  constructor: (@opts = {}) ->
    
  ###*
  # Performs a user look up, and returns the user object, or null if not found
  ###
  findUser: (strategy,id,cb) =>
  
  # Creates a new user
  createUser: (strategy = "local",id,data = {},cb) =>
    connection = @_connection()
    
    data.userName = id unless data.userName
    
    UserModel = @onUserModel(connection)
    # We assume local for now
    userModel = new UserModel( loginKeys: [data.userName], userName : data.userName)
    userModel.save (err) =>
      return cb(err) if err
      cb(null,userModel)
    