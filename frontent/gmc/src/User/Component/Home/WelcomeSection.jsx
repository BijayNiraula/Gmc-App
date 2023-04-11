import React from 'react'
import { Link } from 'react-router-dom'
import defaultProfileImg from "../../../Assets/defaultProfileImg.jpg"


function WelcomeSection(props) {
  return (
    <section className=' w-100   bg-light -dark student-information '>
      {
      }
      <h3 className='text-center mt-2 welcome-meessage mb-3 mt-3'>Welcome to G M C Application </h3>

      <div className="d-flex justify-content-center align-items-center w-100 ">
        
         
{

props.pp!="" && props.pp?
<img src={props.pp} className="me-sm-4" width='120' height='120' alt="" />
:
<img src={defaultProfileImg} className="me-sm-4" width='120' height='120' alt="" />



}
            

         <div className="details d-flex flex-column ms-3 align-items-center justify-content-center ">
              <p className='fw-bold '> {props.name}
              <br />
              Email : <span className='text-danger  fw-bold'> {props.email} </span>
              <br />
                 <Link to="/myProfile " className='btn btn-primary mt-sm-2 mt-2'>View More</Link>
              </p>
             
                

         </div>
      </div>

    </section>
   
  )
}

export default WelcomeSection