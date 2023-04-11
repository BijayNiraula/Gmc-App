const express=require('express');
const router=express.Router();
const {auth}=require('../module/auth')


router.use(auth)
const user=require("../Controller/user.js")
const {getUserDetail,deleteUser,addUser,editUserDetail}=require("../Controller/user.js")
router.route('/addUser').post(addUser)
router.route('/deleteUser').post(deleteUser)
router.route('/getUserDetail').post(getUserDetail)
router.route('/editUserDetail').post(editUserDetail)




module.exports=router
