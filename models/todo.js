const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    }
});


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;