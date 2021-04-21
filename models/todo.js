const mongoose = require('mongoose');

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


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;