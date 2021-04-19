// require the library
const mongoose = require('mongoose');

// connect to the db
mongoose.connect('mongodb://localhost/todo_list_db');

// acquire the connection to check if it is successful
const db = mongoose.connection;

// if error
db.on('error', console.error.bind('error connecting to db'));

// if connected successfully print this
db.once('open', function() {
    console.log("Successfully connected to the database");
});