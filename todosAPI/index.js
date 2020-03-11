let express = require('express'),
    bodyParser = require("body-parser"),
    app = express()

// import routes
let todoRoutes = require('./routes/todos')
// use bodyParser so that post request can come through as json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// app.listen // to listen to server
// app.get // to define a route

app.get('/', function(req,res){
    res.send("Hello from ROOT route")
})

app.get('/json', function(req,res){
    res.json({message: "this is json"}) // content type: json
})

app.get('/string', function(req,res){
    res.send("{message: 'this is html'}") // content type: text/html; charset=utf-8
    // calls res.json first
    // send is like a parent
    // json.stringify then respond through json
})


app.get('/happy', function(req,res){
    res.send(":D")
})

app.use('/api/todos', todoRoutes) // all routes defined in todoRoutes comes after /api/todos#
app.listen(3000, () => {console.log("=======================Server Is Listening!=======================")})