## About passport-users-mongoose

Provides a canonical mongodb user and authentication store as part of the passport (https://github.com/jaredhanson/passport) family. It makes use of mongoose and has taken some inspiration from devise

THIS IS NOT DONE YET. DON'T USE YET

[![Build Status](https://secure.travis-ci.org/scottyapp/passport-users-mongoose.png)](http://travis-ci.org/scottyapp/passport-users-mongoose.png)


_id 
userName
displayName
description (one liner like twitter status, do you have a better term)
emails: Array of email object, with sparse index on email. (email, dateCreated, dateUpdated,isVerified,verificationToken)
notificationEmail: This is the email to send notifications to (better to have an easy to grasp field)
createdAt
updatedAt

roles: array of string 
statistics: 
   signInCount: 12

authentications: array of
     provider: (twitter, facebook,....)
     uid: Userid with the provider
     secret: secret used to obtain the values - needs to be stored for future use
     token: long living token returned by the provider
     bearerToken:? need to look into oauth2 with refresh...
     description
     email
     firstName
     lastName
     profileImage
     displayName: like Martin Wawrusch
     userName;  like martin_sunset
     others: Object containing additional infos



# Install

npm install passport-users-mongoose

## Usage


### Coffeescript

 
### Javascript


## Advertising :)

Check out 

* http://scottyapp.com

Follow us on Twitter at 

* @getscottyapp
* @martin_sunset

and like us on Facebook please. Every mention is welcome and we follow back.

## Trivia

* Soundgarden. A lot of Soundgarden.

## Release Notes

### 0.0.1

* First version

## Internal Stuff

* npm run-script watch

# Publish new version

* Change version in package.json
* git tag -a v0.0.1 -m 'version 0.0.1'
* git push --tags
* npm publish

## Contributing to passport-users-mongoose
 
* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it
* Fork the project
* Start a feature/bugfix branch
* Commit and push until you are happy with your contribution
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the package.json, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.

## Copyright

Copyright (c) 2011 Martin Wawrusch. See LICENSE for
further details.


