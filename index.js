// require express to setup server
const express = require('express');
// give the port number 
const port = 8000;

// require mongoose
const db = require('./config/mongoose');
const Todo = require('./models/todo');

// run the express function
const app = express();

// used to parse json and urls
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('assets'));

// setting up view engine
app.set('view engine', 'ejs');
// giving it the folder in which to look for views
app.set('views', './views');


// define routes
app.get('/', function(req, res) {
    Todo.find({}, function(err, todoList) {
        if (err) {
            console.log('Error in fetching todos from db');
            return;
        }
        return res.render('home', {
            title: "Todo",
            todo_list: todoList
        });
    });

});

// receiving data from the form
app.post('/create-todo', function(req, res) {
    Todo.create({
        topic: req.body.topic
    }, function(err, newTodo) {
        if (err) {
            console.log('Error in creating new todo');
            return;
        }
        console.log('*********** new Todo created: ', newTodo);
        return res.redirect('back');
    });
});

// in case of delete button is pressed
app.get('/delete-todo', function(req, res) {
    //get the id from the url

    let id = req.query.id;

    // find todo in the database using id and delete
    Todo.findByIdAndDelete(id, function(err) {
        if (err) {
            console.log('Error in deleting an object form database');
            return;
        }
        //redirect back
        return res.redirect('back');
    });

});

// make the app listen on the given port number
app.listen(port, function(err) {
    if (err) {
        // if error occurs this message is printed
        console.log(`Error in running the server: ${err}`);
        return;
    }
    // In case of successful execution this message is printed
    console.log(`Server is up and running on port: ${port}`);
});