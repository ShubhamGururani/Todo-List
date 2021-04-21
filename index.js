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
// used to access static files. These files can only be accessed by using express.static
app.use(express.static('assets'));

// setting up view engine
app.set('view engine', 'ejs');
// giving it the folder in which to look for views
app.set('views', './views');


// define routes

app.get('/', function(req, res) {
    // base route directs to the home page
    Todo.find({}, function(err, todoList) {
        if (err) {
            console.log('Error in fetching todos from db');
            return;
        }
        // renders the home page with given title and data
        return res.render('home', {
            title: "Todo List",
            todo_list: todoList
        });
    });

});


// receiving data from the form
app.post('/create-todo', function(req, res) {
    // creates a new todo with given attributes
    Todo.create({
        topic: req.body.topic,
        date: req.body.date,
        category: req.body.category,
        completed: false
    }, function(err, newTodo) {
        // handles error otherwise informs us that new todo is created
        if (err) {
            console.log('Error in creating new todo');
            return;
        }
        console.log('*********** new Todo created: ', newTodo);
        return res.redirect('back');
    });
});

// in case of delete button is pressed
app.post('/delete-todo', function(req, res) {
    console.log(req.body);
    // receives lots of keys by help of form and for each key deletes the objects
    Object.keys(req.body).forEach(function(key) {
        Todo.findByIdAndDelete(key, function(err) {
            if (err) {
                // if error in deletion prints error
                console.log('Error in deleting an item from database', err);
                return;
            }
            console.log('item is deleted');

        });
    });
    return res.redirect('back');

});

app.use(function(req, res) {
    // in case of any request other than those mentioned above we render the 404 page
    // this is very unlikely to happen but  still we need to handle this for safety purposes
    res.status(404).render('404');
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