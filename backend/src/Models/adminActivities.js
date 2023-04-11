const mongoose=require('mongoose')

const adminActivitiesSchema= new mongoose.Schema({
    
    time:{
        type:Number ,
    }
    ,
    detail:{

        
    }
   

})

const adminActivities=mongoose.model("Activity",adminActivitiesSchema);

module.exports=adminActivities