const express=require('express');
const router=express.Router();
const {auth}=require('../module/auth')


router.use(auth)
const {getAdminActivities}=require("../Controller/adminActivities.js")
router.route('/getAdminActivities').post(getAdminActivities)




module.exports=router