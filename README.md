


*workspace/nodeclass/forked/tinderassembledotcom*

# TINDERASSEMBLEDOTCOM - NSS Group Project
Where superheroes find love. This is a MEAN stack app where the user (presumably super heroes) registers, logs in, edits their profile and then search other profiles for desirable matches.

## Features and Technology
Node.js and Express.js for the back end server. MongoDB with Mongoose for persistent memory. Front end uses Angular with Angular Router and ngStorage.  Express-Session and Redis for maintaining session. Bcrypt for hashing passwords. Bower and NPM for package management.

## To Install
```bash
npm install
bower install
```
## Current Progress
At this point a user is able to register and login and edit profile. Features that need to be implemented are searching other profiles and messaging between users.

## Collaborators
Zachary George, Dave Harms, Chris Hill, Alex Horton, Matt Latham, and Jamie McAuliffe. Callan Morrison provided valuable assistance.

## Deployment
The Node.js server is deployed to Heroku at [tinderassemble.herokuapp.com](https://tinderassemble.herokuapp.com/profile); Redis is also maintained through Heroku as well.. The MongoDB is hosted at [Mlab](https://mlab.com/).
