let mongoose = require('mongoose')
mongoose.set('debug', true)
//connect mongoose
mongoose.connect("mongodb://localhost:27017/auth_demo_app", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = Promise // to allow us to use promise db.Todo.find().catch.get...
module.exports.Todo = require("./todo")

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);