const adminActivities = require('../../Models/adminActivities')

const getAdminActivities = async (req, res) => {
     try {
          const { to, from } = req.body;
          if(to-from < 2592000000+10000){



          var result = await adminActivities.find({ "time": { $gte: from, $lte: to } }).sort("-time")
          res.send({ "success": "success", "data": result })
     }else{
          res.send({"error":"too many result"})
     }

     } catch (e) {
          res.send({ "error": "some error occured in server" })
     }

}




module.exports = {  getAdminActivities }