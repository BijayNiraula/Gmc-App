const express=require('express');
const router=express.Router();

const{getUserInformation}=require('../controller/user')

router.route('/').post(getUserInformation)
module.exports=router