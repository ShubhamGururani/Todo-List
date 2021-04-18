// require express to setup server
const express = require('express');

// run the express function
const app = express();

// give the port number 
const port = 8000;

// make the app listen
app.listen(port, function(err) {
    if (err) {
        // if error occurs this message is printed
        console.log(`Error in running the server: ${err}`);
        return;
    }
    // In case of successful execution this message is printed
    console.log(`Server is up and running on port: ${port}`);
});