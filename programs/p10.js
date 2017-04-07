var a=require("express");
var application=a();

application.get("/",function(req,res)
{
	res.send("welcome");
});

application.get("/compute",function(req,res)
{
	var a=prompt("enter the value of a: ");
	var b=prompt("enter the value of b: ");
	var c=a+b;
	res.send(c);
})
application.listen(3000);
console.log("server online!!!!");