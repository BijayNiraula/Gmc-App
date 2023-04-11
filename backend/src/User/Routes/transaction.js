const express= require('express')

const router= express.Router();

const {madeTransaction} = require('../controller/transaction.js',)
router.route('/madeTransaction').post(madeTransaction)

module.exports=router