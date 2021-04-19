// require express to setup server
const express = require('express');
// give the port number 
const port = 8000;
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

// temporary storage( remove it later on)
var todoList = [{
    topic: "Buy Cheese",
}, {
    topic: "Buy Toppings"
}, {
    topic: "Make Pizza"
}]

// define routes
app.get('/', function(req, res) {
    return res.render('home', {
        title: "Todo",
        todo_list: todoList
    });
});

// receiving data from the form
app.post('/create-todo', function(req, res) {
    todoList.push(req.body);
    return res.redirect('back');
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