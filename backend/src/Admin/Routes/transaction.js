const express=require('express');
const router=express.Router();
const {auth}=require('../module/auth')


router.use(auth)
const {getTransactions,editTransactions}=require("../Controller/transactions.js")
router.route('/getTransactions').post(getTransactions);
router.route('/editTransactions').post(editTransactions);





module.exports=router