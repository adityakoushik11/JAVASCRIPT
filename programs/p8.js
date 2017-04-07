var get=require("./p7").demo;

var express=require("express");
var app=express();
app.get("/", function(req,res)
{
	res.send("hello .... welcome");
});

app.get("/grade", function(req,res)
{
	res.send("100,90,89");
});
app.listen(3000);
console.log("server ready....");