import React from 'react'
import logo from '../Assets/logo.jpg'
import { Link } from 'react-router-dom'
import { memo } from "react";
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


function SideBar() {
  const navigate=useNavigate()
  const auth=useContext(AuthContext);
  const logout=()=>{
    auth.logout()
    navigate("/",{replace:true})
  
  }

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light  w-100" style={{height:"100vh"}}>
     
    <div  className="d-flex justify-content-center w-100  align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
     <img src={logo} width='60' height='60' className='' alt="" />
      <h1 className="fs-3 text-dark ">GMC APP</h1>
    </div>

    <div className="text-center">
        <i className='text-danger fw-bold small'>Admin Pannel</i>
    </div>
    <hr/>
    <Link to="/" className="btn btn-outline-secondary border border-0   small"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-speedometer me-2" viewBox="0 0 16 16">
  <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
  <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
</svg> <strong>
dashboard
  </strong> </Link>
    <br />
   < Link to="/userdetail" className="   btn btn-outline-secondary border border-0  small"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> <strong>
user detail
  </strong> </Link>
  <br />
  < Link to="/transaction" className="   btn btn-outline-secondary border border-0  small"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi me-2 bi-cash-coin" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg> <strong>
 transaction
  </strong> </Link>
    <br />
    < Link to="/activities" className="   btn btn-outline-secondary border border-0  small"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi me-1 bi-activity me-2" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
</svg> <strong>
 activities
  </strong> </Link>
    <hr/>
     <div className="text-center w-100">
         <button className="btn btn-danger" onClick={()=>{logout()}}>Logout</button>
     </div>
  </div>




  )
}

export default memo(SideBar)