let express = require('express')
let router = express.Router()
let db = require('../models')
let helpers = require('../helpers/todos')
//
//
// router.get("/", function(req,res){
//     db.Todo.find()
//         .then(function(todos){
//             res.json(todos)
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })
//
// router.post('/', function(req, res){
//     db.Todo.create(req.body)
//         .then(function(newTodo){
//             res.status(201).json(newtodo)
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })
//
// router.get('/:todoId', function(req,res){ //: is defining path variable /todo/api/123123
//     db.Todo.findById(req.params.todoId)
//         .then(function(foundTodo){
//             res.json(foundTodo)
//         })
//         .catch(function(err){
//             res.send(err)
//     })
// })
//
// router.put('/:todoId', function(req,res){
//     db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new:true}) //new:true will show the changed todo in postman right away
//         .then(function(todo){
//             res.json(todo)
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })
//
// router.delete('/:todoId', function(req,res){
//     db.Todo.remove({_id: req.params.todoId})
//         .then(function(){
//             res.json({message:"Todo is deleted"})
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos)

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

// export routes
module.exports = router