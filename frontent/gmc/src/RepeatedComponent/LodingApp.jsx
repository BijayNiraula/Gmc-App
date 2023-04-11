import React from 'react'
import logo from "../Assets/logo.jpg"
import ReactLoading from "react-loading";
function LodingApp() {
  return (
    <>
    
    <div className='w-100vw h-100vh app-starting '>
  <span className="d-flex align-items-center flex-column">
  <img src={logo} width="150" height='150'></img>
  

<div className="mt-4 ">

<ReactLoading type="spokes" color="grey" 
        height={50} width={50} />
</div>

  <span className="fw-bold mt-2">
    {/* Loading */}
  </span>


  </span>
      

    </div>

  <div className="text-center">
     <p className="text-muted text-center text-secondary mt-3">
       <span className="text-info fw-bold">G</span><span className="text-success fw-bold">MC  </span> Web App
     </p>
      <small className="fs-italic text-center small">
      © Developed by  <a href="https://bijay-niraula.com.np/"> bijay niraula </a> 


      </small>
  </div>

    </>

  )
}

export default LodingApp