
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema({
	  name:{type:String,required:true},
		members:{type:String,required:true},
		email:{type:String,required:true,unique:true},
		city:{type:String,required:true},
		college:{type:String,required:true},
	  phone:{type:Number,required:true},
		year:{type:String,required:true},
		events:{type:String,required:true},
});

var User=mongoose.model('User',userSchema)
module.exports=User;
