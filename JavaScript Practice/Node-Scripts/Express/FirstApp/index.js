const express = require('express');

//Start the server
const app = express();

//Runs every time a request is made
app.use((req, res) => {
  console.log("Request was made");
  //res.send("The response");
  res.send({ name: "jose", age: 21 });

});

//Now that we got the server running we
//need to make it 'listen' to our site
//Needs a port its going to 'listen' on
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

//After running this the server stays up 
//waiting for requests to be made.