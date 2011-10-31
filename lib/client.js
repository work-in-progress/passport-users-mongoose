(function() {
  /**
  Provides a wrapper against the database and convenience functions for
  easy passport hookup
  */
  var mongoose;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  mongoose = require('mongoose');
  exports.Client = (function() {
    Client.prototype.UserSchema = require('./schemas/user_schema');
    Client.prototype.onUserModel = function(connection) {
      return connection.model("User", this.UserSchema);
    };
    Client.prototype._connection = function() {
      return mongoose;
    };
    /**
    Initializes a new instance of the @see Client class.
    */
    function Client(opts) {
      this.opts = opts != null ? opts : {};
      this.createUser = __bind(this.createUser, this);
      this.findUser = __bind(this.findUser, this);
      this._connection = __bind(this._connection, this);
    }
    /**
    # Performs a user look up, and returns the user object, or null if not found
    */
    Client.prototype.findUser = function(strategy, id, cb) {};
    Client.prototype.createUser = function(strategy, id, data, cb) {
      var UserModel, connection, userModel;
      if (strategy == null) {
        strategy = "local";
      }
      if (data == null) {
        data = {};
      }
      connection = this._connection();
      if (!data.userName) {
        data.userName = id;
      }
      UserModel = this.onUserModel(connection);
      userModel = new UserModel({
        loginKeys: [data.userName],
        userName: data.userName
      });
      return userModel.save(__bind(function(err) {
        if (err) {
          return cb(err);
        }
        return cb(null, userModel);
      }, this));
    };
    return Client;
  })();
}).call(this);
