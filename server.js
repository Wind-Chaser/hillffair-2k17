 var express=require('express');
var app=express()

app.use(express.static(__dirname));
app.get('/',function (req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get('/event',function (req,res){
  res.sendFile(__dirname+"/events.html");
});
app.get('/contact',function (req,res){
  res.sendFile(__dirname+"/contacts.html");
});
app.get('#/contact',function (req,res){
  res.sendFile(__dirname+"/contacts.html");
});
app.get('#/event',function (req,res){
  res.sendFile(__dirname+"/events.html");
});
app.listen(process.env.PORT || 8080,function(){
    console.log("localhost at 8080",process.env.PORT);
});
