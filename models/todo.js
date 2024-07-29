const mongoose = require('mongoose');

 const todoSchema =new  mongoose.Schema({

title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true

},
date:{
    type:String,
    required:true

},
priority:{
    type:String,
    required:true
},
stage:{
    type:String,
    required:true
},
createdAt :{
    type:Date,
    required:true,
    default:Date.now()
},
updatedAt :{
    type:Date,
    required:true,
    default:Date.now()
}

});

module.exports=mongoose.model('Todo',todoSchema)