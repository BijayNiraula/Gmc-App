require("dotenv").config()
const Transaction=require("../../Models/transaction")
const User=require('../../Models/users')
const jwt=require('jsonwebtoken')
const getUserInformation=async(req , res)=>{
  try{
   const encryptedData=req.headers["auth"];
   
    const decode = jwt.verify(encryptedData, process.env.secrect_key);
    const searchDataObject={"role":"user"}
    searchDataObject.email=decode.email;
    searchDataObject.password=decode.password;
    const detail= await User.findOne(searchDataObject);
    const transaction=await Transaction.find({"s_Id":detail._id}).sort("-time")
     const resObj={"detail":detail,"transaction":transaction}
      res.status(200).send(resObj)

  }catch(e){
    res.status(404).send({"error":"some error occured"})
  }
     

}



module.exports={getUserInformation};