require("dotenv").config()
const mongoose=require("mongoose");

const url=process.env.dbUrl


const connectDb=async()=>{
return (
    mongoose.connect(url,{
       useNewUrlParser:true,
       useUnifiedTopology:true,
    })
)

}
module.exports=connectDb
