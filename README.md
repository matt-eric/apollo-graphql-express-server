[![Build Status](https://travis-ci.com/matt-eric/this-seems-WAY-out-there-node-side.svg?branch=master)](https://travis-ci.com/matt-eric/this-seems-WAY-out-there-node-side)

# This seems WAY out there. *(Back End)*

### *A visual effect web app generating responses based on mouse/touch placement and movement. Parameters are adjustable through a user-controllable effect bus.*

### This project has an accompanying [front end repository](https://github.com/matt-eric/this-seems-WAY-out-there-react-side).

## Steps for starting the development server:

### 1. Setup MongoDB:

a. [Create a new Atlas Cluster](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/).

b. Ensure that the cluster has:

- [x] A database user & password (with admin privelages).
- [x] Whitelisted network access to 0.0.0.0/0 or your IP addres.

### 2. Add ENV variables:

Create a `.env` file in the root directory and add the following variables:

`MONGO_USER=< Your Cluster User >`

`MONGO_PASS=< Your Cluster Password >`

`MONGO_CLUSTER=Effects`

### 3. Scripts:

### `npm run dev`

Runs the Apollo server in development mode.\
Open [http://localhost:8000/graphql](http://localhost:8000/graphql) to view it in the browser.

### Tech stack:

- [x] Node.js
- [x] Express.js
- [x] MongoDB
- [x] GraphQL
- [x] Apollo

This repository is configured for deployment with [Google App Engine](https://cloud.google.com/appengine).

#### Contributing guidelines to be added soon.
