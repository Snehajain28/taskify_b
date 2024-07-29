const mongoose = require('mongoose');

 const userSchema=new mongoose.Schema({
 
    name:{
        type:String,
        required:true,
    },
 
  email:{
    type:String,
  
  },
 
  password:{
    type:String,
  
  },

  username: {
    type:String,
  
  },
 
  createdAt:{
    type:Date,
    default:Date.now
  },
  
todos:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Todo",
}],
});

module.exports =mongoose.model("User" , userSchema);