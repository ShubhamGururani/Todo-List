const mongoose = require('mongoose');
// require mongoose
// create a schema to be used
const todoSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    date: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

// use the schema to create model
const Todo = mongoose.model('Todo', todoSchema);
// export the model
module.exports = Todo;