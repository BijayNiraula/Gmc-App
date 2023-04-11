require("dotenv").config()
const crypto=require('crypto');
const User =require("../../Models/users.js")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const sendMail=require("../Module/sendMail.js")


// uaxggofshtyfytdy
const login=async(req,res)=>{
    try{
        const reqDetail={"email":req.body.email.trim().toLowerCase()}
        const detail=await User.findOne(reqDetail).select(" email password role ")
        if( bcrypt.compareSync(req.body.password.trim().toLowerCase(),detail.password  )){
            const  token= jwt.sign(
                 detail.toJSON()
               , process.env.secrect_key, { expiresIn: '48h' });
            res.status(200).send({"auth":true,"token":token,"role":detail.role})
        }else{
            res.status(404).send({auth:false , error:"Invalid Credentials  "})
        }
            
    }catch(e){
        console.log(e)
        res.status(400).send({error:"Invalid Credentials "})
    }
   
}





const changePassword=async(req,res)=>{

    
    try{
   const{email,otp,newPassword}=req.body

   if(newPassword.length >= 4 ){
    
    const savedOtp=await User.findOne({email:email.toLowerCase().trim()}).select('otp')
    if( Date.now() - savedOtp.otp.createdAt >200000){
         res.send({"error":"otp has been expired"})
    }else{

    if(otp==savedOtp.otp.otp){
        const salt=bcrypt.genSaltSync(10)
    const hashPassword=bcrypt.hashSync(newPassword.trim().toLowerCase(),salt)

         const updataPassword=await User.updateOne({email},{
            $set:{
                "password":hashPassword
            }
         })  
         res.send( {"success":"password has been changed successfully"})
    }else{
    
        res.status(200).send({"error":"otp does not matching"})

    }
}


   }else{
    res.status(200).send({"error":"Too short password"})
    
   }
   
}catch(e){
    console.log(e)
    res.status(400).send({"error":"some internal error occured"})
}


}





const generateOtp=async(req,res)=>{
    try{
        const email=req.body.email.trim().toLowerCase();
        const otp =crypto.randomInt(111111,999999)
        const otpObj={
            "otp":otp,
            "createdAt":Date.now()
        }

        
          const saveOtp=await User.updateOne({email},{
            $set:{
                otp:otpObj
            }
          })
     
        if(saveOtp.modifiedCount==0){
    res.status(400).send({"error":" No user with this email " })

             

        }else{
            const html="Your Otp to reset Password is : <br/> <h1> " +  otp + " </h1> <br/>It  is valid upto next  <b>  3 minutes <b> "
            await   sendMail({to:email,subject:"Reset Password",html:html})
            res.status(200).send({"success":"success"})

            
        }
    
    }catch(e){
        console.log(e)
        res.status(400).send({"error":"some error occured"})
    }
  
}

module.exports={changePassword,login,generateOtp}