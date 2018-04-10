// Import the library

var express = require('express');
var app  = express();
var mongoose = require('mongoose');

var url = 'mongodb://127.0.0.1:27017/bookregister';
var bodyParser = require('body-parser');


mongoose.connect(url, () => { console.log('Connected to the db')})
		.catch(err => {
		  console.log(err);
		});


app.use(express.static(__dirname + '/vue')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.listen(8080);
 
 