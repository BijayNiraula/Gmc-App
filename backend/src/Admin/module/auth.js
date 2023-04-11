require("dotenv").config()
const jwt=require('jsonwebtoken')
 const User=require('../../Models/users')
const auth=async(req,res,next)=>{
   try{


   if(req.headers['auth']){
     const encryptedData=req.headers["auth"];
     
      const decode = jwt.verify(encryptedData, process.env.secrect_key);
      const obj={"email":decode.email,"password":decode.password,"role":"admin"}
      const result=await User.findOne(obj).select("_id")
      if(result){

         next()
        
  
      }else{
         res.send({"error":"not authenticate"})
      }
     
   }else{
      res.send({"error":"not authenticate"})
   }
}
catch(e){
    res.send({"error":"some error occured in the server"})
}

}


module.exports={auth}