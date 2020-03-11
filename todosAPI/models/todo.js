let mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Define Schema
let todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

// Take the schema which is a DB pattern
// compile it to a model and save it to a variable Todo
let Todo = mongoose.model('Todo', todoSchema)


module.exports = Todo // Now it is accessible in index.js
// name (string)
// completed (bool)
// created (date)