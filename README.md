# BikeHacks
A simple application that displays various bike maintenance tutorials. This application includes both a create-react-app and nodeJS HTTP server that run inside a Docker environment. 

## Installation
1. Ensure that you have Docker installed on your machine.
2. Clone this repository then navigate into the new repo. Run `cd BikeHacks`.
3. Next, you will need to build the docker images for both the react app and node app.
    * Run `cd bike-hacks` to navigate to the react app (bike-hacks).
    * Run `docker build . -t bike-hacks` to build the docker image for the react app.
    * Once that completes, navigate to the node app (server).
    * Run `cd ../server`.
    * Run `docker build . -t server` to build the docker image for the node app.
    * Run `docker compose up` to start the docker container. 
4. That's it! If the `docker compose up` command ran successfully, you should be able to view the react app at `http://localhost:3000`. You should also be able to see the data returned from the node app at `http://localhost:4000`. 
