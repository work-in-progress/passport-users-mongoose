(function() {
  /**
  Provides a wrapper against the database and convenience functions for
  easy passport hookup
  */
  var mongoose;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  mongoose = require('mongoose');
  exports.Client = (function() {
    /**
    Initializes a new instance of the @see Client class.
    */    function Client(opts) {
      this.opts = opts != null ? opts : {};
      this.createUser = __bind(this.createUser, this);
      this.findUser = __bind(this.findUser, this);
    }
    /**
    # Performs a user look up, and returns the user object, or nil if not found
    */
    Client.prototype.findUser = function(strategy, id, cb) {};
    Client.prototype.createUser = function() {};
    return Client;
  })();
}).call(this);
