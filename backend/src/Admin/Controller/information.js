const User=require('../../Models/users')

const getInformation=async(req,res)=>{
   
   try{
    const c=await User.count();
    
    res.send( {data: {"totalStudent":c,},success:"success"})

   }catch(e){
    res.send({"error":"some error occured"})
   }
   



}

module.exports={getInformation}