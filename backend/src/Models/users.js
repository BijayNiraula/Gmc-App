const mongoose=require('mongoose')

const studentSchema= new mongoose.Schema({
    
    name:{
        type:String ,
    },
    email:{
        type:String,
        required:true
        
    },role:{
        type:String,
        default:"user"
        
    }
    ,password:{
    },
    otp:{
       
    },
    faculty:{

    },
    pp:{

    },
    
   rollNo:{
    type:Number,
   },
    class:{
        type:Number,

    },
    dueAmt :{
        type:Number,
        default:0
    },
    address:{
     
    },
    subjects:{
        type:String,
    },
     bus:{
        type:String,
        default:"no"

    },
    dob:{

    },


})

const User=mongoose.model("Student",studentSchema);

module.exports=User