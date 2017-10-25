 var express=require('express');
var app=express();
var User=require('./userSchema.js');
var bodyParser=require('body-parser');
app.use(bodyParser.json({strict:false}));
app.use(bodyParser.urlencoded({extended:false}));

var mongoose=require('mongoose');
 mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/hillffair",{useMongoClient: true});

app.use(express.static(__dirname));
app.get('/',function (req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get('/events',function (req,res){
  res.sendFile(__dirname+"/events.html");
});
app.get('/contact',function (req,res){
  res.sendFile(__dirname+"/contacts.html");
});
app.get('/register',function (req,res){
  res.sendFile(__dirname+"/register.html");
});
app.post('/adduser',function (req,res){
  var data=req.body;
  var user=new User(data);
  user.save(function(err,user,numAffected){
  if(err){
    console.log(err);
        res.send('500');
      }
   if(numAffected){
    console.log("added",user);
    res.send(user);
   }
});
});
app.listen(process.env.PORT || 8080,function(){
    console.log("localhost at 8080",process.env.PORT);
});
