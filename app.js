var express = require('express');
var app = express();

app.get('/',function (request , response){
response.sendFile(__dirname+"/index.html");
});

var port = process.env.PORT||8081;
app.listen(port,function(req, res){
	console.log("App is listening at port 8081");
});