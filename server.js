var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");


var port = 3000;

var app = express();


// look for static conetne in the public directory

app.use(express.static(process.cwd() + "/public"));

//config for body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//using method override
app.use(methodOverride("_method"));


//setting up handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");



// app.use("/", routes);

app.listen(port);