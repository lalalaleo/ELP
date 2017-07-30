var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var url = require('url');
var path = require('path');

var testData = require('./testData.js');


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.static("./"));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.post('/midwayIsland/user', function (req, res) {
  	console.log("success");
  if(req.body.type=='login'){
  	console.log("ok");
  }
  	res.send({result:'ok'});
});

app.post('/midwayIsland/data',function(req, res) {
	if(req.body.type=='learning'){
		testData.learning(function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='history'){
		testData.history(function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='recommend'){
		testData.recommend(function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='hotsearch'){
		testData.hotSearch(function(msg){
      		res.send(msg);
    	});
	}
});

app.listen(8888, function () {
  console.log('Midway Island is Running , listening on port 8888!');
});