const mongoose=require('mongoose')

const transactionSchema= new mongoose.Schema({
   
    s_Id:{
        type:String,
    },
    time:{
        type:Number
    },
    amount:{
        type:Number
    },
   
    detail:{
        type:String,
    },
    status:{
        type:String
    }
})
const Transaction=mongoose.model("Transaction",transactionSchema);
module.exports=Transaction