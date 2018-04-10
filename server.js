// Import the library

var express = require('express');
var app  = express();
var mongoose = require('mongoose');

var url = 'mongodb+srv://localhost:27017/test';
var bodyParser = require('body-parser');


mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


app.use(express.static(__dirname + '/vue')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.listen(8080);
 
 