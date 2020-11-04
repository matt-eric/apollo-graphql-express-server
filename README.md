# *This seems WAY out there.* (Server)

### This project has an accompanying [client-side repository](https://github.com/matt-eric/this-seems-WAY-out-there-react-side).



## Steps for starting the development environment:

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

Runs the GraphQL Playground Apollo Server in the development mode.\
Open [http://localhost:8000/graphql](http://localhost:8000/graphql) to view it in the browser.

### Technologies used:

- [x] Node.js
- [x] Express.js
- [x] MongoDB
- [x] GraphQL
- [x] Apollo
- [x] Google App Engine

Contributing guidelines to be added soon.
