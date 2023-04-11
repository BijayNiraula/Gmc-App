const express= require('express')

const router= express.Router();

const {changePassword,generateOtp,login,logout} = require('../controller/authenticate.js',)
router.route('/generateOtp').post(generateOtp)
router.route('/changePassword').post(changePassword)
router.route('/login').post(login)

module.exports=router