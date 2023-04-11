import React from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../../RepeatedComponent/BackButton'
import defaultProfileImg from "../../../Assets/defaultProfileImg.jpg"
function MyProfile(props) {
  return (

    <div className=''>
    {
      console.log(props.detail.pp)
    }
    
    <div className='container border my-profile'>
    <BackButton link='/'/>

       
     
    <div className="w-100">
        <h1 className='text-center mb-4 mt-sm-2 basic-info'>Basic Information</h1>

<div className="d-flex  flex-sm-row flex-column justify-content-center align-items-center ">


  {
    props.detail.pp && props.detail.pp!=""?

    <img src={props.detail.pp} className="me-4 pp p-1" width='200' height='200' alt="" />
    :
<img src={defaultProfileImg} className="me-4 pp p-1" width='200' height='200' alt="" />


  }

<div>

<div className=" d-flex justify-content-center align-items-center">
    
    
    <p className='fs-6 mt-sm-0 mt-3  information '>

 Name :   <span className="text-danger fw-bold"> {props.detail.name} </span>
 <br />
 className : <span className='text-danger fw-bold'> {props.detail.class}</span>
 <br />
 Roll No : <span className='text-danger fw-bold'> {props.detail.rollNo}</span>
 <br />
 Faculty : <span className=' text-danger fw-bold'> {props.detail.faculty} </span>
 <br />
 Email : <span className=' text-danger fw-bold'>{props.detail.email} </span>
<br />

  Address : <span className='text-danger fw-bold '> {props.detail.address}</span>
  <br />
  Subject : <span className='text-danger fw-bold'>{props.detail.subjects}</span>
  <br />
  Bus Service : <span className='text-danger fw-bold'> {props.detail.bus}</span>
  </p>
</div>
</div>


</div>
<hr className='mx-5 m-0 p-0 py-2 '/>
<div className="border w-100 d-flex flex-column align-items-center ">
  <div className="money-show mb-4  ">
 
     <div className='w-100 d-flex fw-bold fs-5'>
        <div className="w-50 fs-5 bg-info text-end me-1 pe-4 py-2">
          Due Amount 
        </div>
        :
        <div className="w-50 bg-danger fs-5  text-start ms-1 ps-4 py-2">
          Rs {props.detail.dueAmt}
        </div>
         

     </div>
    

 </div>


    </div>

    </div>
    </div>
    </div>

  )
}

export default MyProfile