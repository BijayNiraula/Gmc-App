const User = require('../../Models/users.js')
const adminActivities =require('../../Models/adminActivities')


// get User controller
const getUserDetail = async (req, res) => {
  try {
    const { term } = req.body;

    var searchObj = {}
    for (var i = 0; i < 10; i++) {
      if (term.includes(i)) {

        searchObj = { "_id": term }
        break;

      }
    }
    if (!searchObj._id) {
      searchObj.name = { $regex: term, $options: "i" }

    }


    const data = await User.find(searchObj)
    res.status(200).send({ "success": "success", "data": data })

  } catch (e) {
    res.send({ "success": "success", "data": [] })
  }

}




// edit user controller 

const editUserDetail = async (req, res) => {
  try {
    const data = {
      "name": req.body.name,
      "class": req.body.class,
      "rollNo": req.body.rollNo,
      "bus": req.body.bus,
      "dueAmt": req.body.dueAmt,
      "subjects": req.body.subjects,
      "email": req.body.email,
      "dob": req.body.dob,
      "pp": req.body.pp,
      "faculty": req.body.faculty,
      "address": req.body.address,
    }

    const result = await User.updateOne({ "_id": req.body._id }, data)
    if (result.acknowledged) {
     const detail="Edit the information of s_Id : " +req.body._id  
      await adminActivities.create({"time":Date.now(),"detail":detail})
      res.status(200).send({ "success": data })
    } else {
      res.status(200).send({ "error": "some error occured" })
    }
  } catch (e) {
    res.status(400).send({ "error": "some erraor occured" })
  }
}



// delete user controller

const deleteUser = async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await User.deleteOne({ _id: _id ,"role":"user"});
    if (result.deletedCount == 1) {
      const detail="Delete the  user of  s_Id : " + _id 
      await adminActivities.create({"time":Date.now(),"detail":detail})
      res.send({ "success": "deleted successfully" })

    } else {
      res.send({ "error": "Unable to Delete this user" })
    }
  }
  catch (e) {
    res.send({ 'error': 'some error occured' })
  }
}





// add User controller
const addUser = async (req, res) => {
  try {
    const data = {
      "name": req.body.name,
      "class": req.body.class,
      "rollNo": req.body.rollNo,
      "bus": req.body.bus,
      "subjects": req.body.subjects,
      "dueAmt": req.body.dueAmt,
      "email": req.body.email,
      "dob": req.body.dob,
      "pp": req.body.pp,
      "address": req.body.address,
      "faculty": req.body.faculty

    }
    const checkDuplicate = await User.findOne({ email: data.email });
    if (checkDuplicate == null) {
      const result = await User.create(data)
      if (result != {}) {
        const detail="Add the  user of  s_Id : " + result._id 
        await adminActivities.create({"time":Date.now(),"detail":detail})
        res.status(200).send({ "success": "Added Sucessfully" })
      } else {
        res.status(200).send({ "error": "some error occured" })
      }
    } else {
      res.status(200).send({ "error": "this email is already in use" })
    }
  }
  catch (e) {
    res.status(200).send({ "eroor": "some error occured " })
  }
}



module.exports = { getUserDetail, editUserDetail, addUser, deleteUser }