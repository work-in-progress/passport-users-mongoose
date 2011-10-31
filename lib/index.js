(function() {
  var AuthSchema, EmailSchema, LoginHistorySchema, PasswordSchema, ProfileImageSchema, ProfileSchema, RememberMeSchema, RolesSchema, StatsSchema, UserSchema, mongoose, mongooseTypes;
  mongoose = require('mongoose');
  mongooseTypes = require("mongoose-types");
  require('pkginfo')(module, 'version');
  exports.AuthSchema = AuthSchema = require('./schemas/user_schema');
  exports.EmailSchema = EmailSchema = require('./schemas/user_schema');
  exports.LoginHistorySchema = LoginHistorySchema = require('./schemas/user_schema');
  exports.PasswordSchema = PasswordSchema = require('./schemas/user_schema');
  exports.ProfileImageSchema = ProfileImageSchema = require('./schemas/user_schema');
  exports.ProfileSchema = ProfileSchema = require('./schemas/user_schema');
  exports.RememberMeSchema = RememberMeSchema = require('./schemas/user_schema');
  exports.RolesSchema = RolesSchema = require('./schemas/user_schema');
  exports.StatsSchema = StatsSchema = require('./schemas/user_schema');
  exports.UserSchema = UserSchema = require('./schemas/user_schema');
  exports.Client = require('./client').Client;
  mongooseTypes.loadTypes(mongoose);
}).call(this);
