vows = require 'vows'
assert = require 'assert'
mongoose = require 'mongoose'

main = require '../lib/index'
specHelper = require './spec_helper'
specHelper.connectDatabase()
client = new main.Client()

vows.describe("client_user")
  .addBatch
    "CLEANUP TEMP":
      topic: () ->
        specHelper.cleanTmpFiles []
      "THEN IT SHOULD BE CLEAN :)": () ->
        assert.isTrue true      
  .addBatch
    "CLEANING DATABASE" :
      topic: () -> 
        specHelper.cleanDatabase @callback
        return
      "THEN IT SHOULD BE CLEAN :)": () ->
        assert.isTrue true
          
  .addBatch
    "SETUP" :
      topic: () -> 
        specHelper.setup @callback
        return
      "THEN IT SHOULD BE SET UP :)": () ->
        assert.isTrue true
  .addBatch
    "WHEN creating a new user" :
      topic: () -> 
        client.createUser(null,"frank",null, @callback)
        return
      "THEN it should not be an error": (err,user) ->
        assert.isNull err
        "THEN it should return a user object": (err,user) ->
          assert.isNotNull user  
  .export module
