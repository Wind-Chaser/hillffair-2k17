 var express=require('express');
var app=express()

app.use(express.static(__dirname));
app.get('/',function (req,res){
  res.sendFile(__dirname+"/index.html");
});
app.listen(process.env.PORT || 8080,function(){
    console.log("localhost at 8080",process.env.PORT);
});

