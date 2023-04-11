
const Transaction=require('../../Models/transaction')
const adminActivities =require('../../Models/adminActivities')
const User=require('../../Models/users')
const getTransactions=async(req,res)=>{
  try {

    const{ s_Id,status,from,to}=req.body;
    if( to-from < 604800000+1200 || s_Id ){
      
    var searchObj={}
    if(from  ){
      searchObj.time={ $gte: from, $lte: to };
    }
    if(status){
      searchObj.status=status;
    }
     if(s_Id){
         searchObj.s_Id=s_Id
     }
    const result = await Transaction.find(searchObj ).sort("-time")
    res.send({ "success": "success", "data": result })
  }
  else{
res.send({"error":"too many result"})
  }
} catch (e) {
  res.send({ "error": "some error occured in server" })
  
}

}


const editTransactions=async(req,res)=>{
  try {
  const {_id,status,s_Id ,amount}=req.body;
    
    

    const result = await Transaction.updateOne({"_id":_id,"s_Id":s_Id ,"amount":amount},{"status":status} )
    if(result.acknowledged){
        const {dueAmt}=await User.findOne({"_id":s_Id}).select(" dueAmt ");
        let amt;
        if(dueAmt){
            if(status=="accepted"){
               amt= dueAmt - amount
            }
            if(status=="rejected"){
                amt = dueAmt + amount
            }
            const d= await User.updateOne({"_id":s_Id},{
              "dueAmt":amt
            })
            if(d.acknowledged){
              const detail=status + " the transaction of s_id  : " + s_Id
              await adminActivities.create({time:Date.now(),"detail":detail})
            res.send({ "success": "success"})
            }else{
              res.send({"error":"some error occured"})
            }
        }
        
    }else{
      res.send({'error':'could not able to update the status'})
    }
} catch (e) {
  console.log(e)
  res.send({ "error": "some error occured in servera" })
}
}


module.exports={getTransactions,editTransactions}