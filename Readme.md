### Node.js Express routing

template for creating node.js app with routing to api

---

### To create a DB

run the command
mongo create_db.js (use sudo if needed)

### create a network for the containers to work together

docker network create app-net

## build mongo image

docker build -t db mongo:3-xenial .

## build container from mogno image

docker run -d -p 27017:27017 --network=app-net --name db

## build docker image for the node.js app

docker build -t web-app-image .

## create a container for the node app

docker run -d -p 8080:8080 --network=app-net --env MONGO_CONNECTION_STRING=mongodb://db:27017 --name node-app web-app-image
