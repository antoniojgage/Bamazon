// Instructions
// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus
// Look for other ways to expand what your server can do. As possibilities:
// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet


// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var niceGuy = 7000;
var badGuy = 7500;

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("I think you're just ...fantastic: Port" + niceGuy);
}

function handleRequest2(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You sir...need more to study... your habits are terrible: Port: " + badGuy);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);


// Here we start our server so that it can begin listening to client requests.
server.listen(niceGuy, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("I think you're just ...fantastic: http://localhost:%s", niceGuy);

});

server2.listen(badGuy, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("You sir...need more to study... your habits are terrible: http://localhost:%s", badGuy);

});