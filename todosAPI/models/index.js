let mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//connect mongoose
mongoose.connect("mongodb://localhost:27017/auth_demo_app", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = Promise
module.exports.Todo = require("./todo")
