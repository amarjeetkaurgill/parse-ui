var express = require('express');
var Parse = require('parse/node');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

Parse.initialize("myAppId");
Parse.serverURL = 'http://nasscom.herokuapp.com/parse'

app.listen(3000);
