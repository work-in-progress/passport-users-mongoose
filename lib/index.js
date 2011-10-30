(function() {
  var mongoose, mongooseTypes;
  mongoose = require('mongoose');
  mongooseTypes = require("mongoose-types");
  require('pkginfo')(module, 'version');
  /**
  Encapsulates the primary functionality for this module.
  */
  exports.PassportUsersMongoose = (function() {
    /**
    Initializes a new instance of the @see PassportUsersMongoose class.
    */    function PassportUsersMongoose(opts) {
      if (opts == null) {
        opts = {};
      }
      this.entityInfos = {};
    }
    return PassportUsersMongoose;
  })();
}).call(this);
