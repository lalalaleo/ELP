var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
var url = require('url');
var path = require('path');

var testData = require('./testData.js');
var testUser = require('./testUser.js');

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

//选择diskStorage存储
const storage = multer.diskStorage({
 destination: function (req, file, cb) {
  cb(null, path.resolve('./file'));
 },
 filename: function (req, file, cb) {
  cb(null, Date.now() + path.extname(file.originalname));//增加了文件的扩展名
 }
});

var upload = multer({storage: storage});


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
	else if(req.body.type=='hotAE'){
		testData.allHotAEClasses(function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='newAE'){
		testData.allNewAEClasses(function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='hotFE'){
		testData.allHotFEClasses(function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='userList4'){
		testData.userList4(function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='classList4'){
		testData.classList4(function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='commentsList'){
		testData.commentsList(function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='shareComment'){
		testData.shareComment(req.body.content,function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='answerComment'){
		testData.answerComment(req.body.answerID,req.body.content,function(msg){
      		res.send(msg);
    	});
	}
	else if(req.body.type=='search'){
		testData.search(req.body.searchInfo,function(msg){
      		res.send(msg);
    	});
	}
});

app.post('/midwayIsland/user',function(req, res) {
	if(req.body.type=='login'){
		testUser.login(req.body.logId,req.body.pwd,function(msg){
      		res.send(msg);
    	});
	}
});

app.post('/posts', upload.single('file'), function(req, res, next) {
	console.log(123);
});

app.listen(8888, function () {
  console.log('Midway Island is Running , listening on port 8888!');
});
