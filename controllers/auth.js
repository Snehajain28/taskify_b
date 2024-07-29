const bcrypt = require('bcrypt')
const User = require('../models/User');


exports.signup = async (req,res) => {
  
    try{
   const {name,email,password,username} = req.body;
   const  existingUser = await User.findOne({email});

   if(existingUser){
    return res.status(400).json({
        success:false,
        message:"already email exists"
    }); 
}
      let haashedPassword;
        try{
        haashedPassword = await bcrypt.hash(password,10);
          }
          catch(err){
            return res.status(500).json({
                success:false,
                message:"password hashing problem"
            });
          }
         
                const user = await User.create({name,email,password:haashedPassword,username});
             
                 return  res.status(200).json  ({
               success:true,
               user,
               message:"user created successfully" 
             })
 
   }

   
   catch(err){
   
   return  res.status(500).json  ({
        success:false,
        message:"overall signup error" 
      })
   }

}

exports.login = async(req,res) => {
 try{
     const {email,password} = req.body;
   if(!email ||!password) {
    return  res.status(400).json  ({
        success:false,
        message:"fill all entity" 
      })
   }
    const user = await User.findOne({email});
    if(!user){
        return  res.status(401).json  ({
            success:false,
            message:"user doesnt exist" 
          })
    }
  if (!(await bcrypt.compare(password,user.password))){
    return  res.status(403).json  ({
        success:false,
        message:"password not matched" 
      })
  }

  return res.status(200).json({
        success:true, 
        user,
        message:"logged in successfully" 
  })
       
 }
 catch(err){
   
    return  res.status(500).json  ({
         success:false,
         message:"overall login error" 
       })
    }

}

