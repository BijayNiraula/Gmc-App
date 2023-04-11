require("dotenv").config()
const express = require('express');
const cors = require('cors')
const authenticateRoutes = require('./User/Routes/authenticate')
const userRoutes = require('./User/Routes/user')
const connectDb = require("./Db/conn")
const server = express();
const adminTransactionRoutes=require('./Admin/Routes/transaction.js')
const adminUsersRoutes=require('./Admin/Routes/user')
const adminInformationRoutes=require("./Admin/Routes/Information")
const port = process.env.port || 4000;

const adminActivitiesRoutes=require('./Admin/Routes/adminActivities')

server.use(cors())
server.use(express.json())


server.use(function (err, req, res, next) {
    res.send({"error":"some error occured in the server"})

})


server.use('/authenticate', authenticateRoutes)
server.use('/user', userRoutes)
server.use('/admin/information',adminInformationRoutes)
server.use('/admin/user',adminUsersRoutes)
server.use('/admin/activities',adminActivitiesRoutes)
server.use("/admin/transactions",adminTransactionRoutes)



const start = async () => {
    await connectDb()
    server.listen(port, () => {
        console.log("app is listening : " + port)
    })

}

start();









