let express = require('express'),
    bodyParser = require("body-parser"),
    app = express()

// import routes
let todoRoutes = require('./routes/todos')
// use bodyParser so that post request can come through as json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname + '/views')) // so that views index.html file can be found.
app.use(express.static(__dirname + '/public')) // This works wherever location is

app.get('/', function(req,res){
    res.sendFile("index.html")
})

app.use('/api/todos', todoRoutes)
app.listen(3000, () => {console.log("=======================Server Is Listening!=======================")})