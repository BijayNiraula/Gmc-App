const express=require('express');
const router=express.Router();
const {auth}=require('../module/auth')


router.use(auth)
const {getInformation}=require("../Controller/information")
router.route('/getInformation').post(getInformation);





module.exports=router