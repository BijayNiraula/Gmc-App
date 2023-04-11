import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';
import { memo } from 'react';
import { errorToast } from '../Module/ToastModule';
import fetchdata from '../Module/fetchdata';
import { baseUrl } from '../Module/Data';

function EnterEmail(props) {

    const text=useRef()
    const loader=useRef()

    const sendOtp=async(e)=>{

      e.preventDefault()
      loader.current.style.display='flex';
      text.current.style.display='none'
      const email=JSON.stringify({"email":e.target[0].value})
      const d=await fetchdata(email,baseUrl+"/authenticate/generateOtp")
        if(d.error){
          errorToast(d.error)
        }else{
          props.getEmail(e.target[0].value)
      console.log(d)
        }

        loader.current.style.display='none'
        text.current.style.display=''
     

    }
  
    
  return (
    <div className="enter-email">
    <form className='border px-2'  onSubmit={sendOtp} >
    <Link to='/' className='btn mt 1'>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
   </svg>
   </Link>
      <h4 className="fs-5 fw-normal text-center mt-2 px-3">Enter your email address to reset the password</h4>

      <div className="mt-4  mb-4 mx-4 ">
        <input type="email" className="form-control border border-dark "  placeholder="Enter your email " required/>
      </div>
      

  
      
      <div className=" d-flex justify-content-center px-3">


        
      <button className="w-100 mx-3 btn  btn-primary" ref={text} type="submit">
       Reset password
        

    </button>
      <button disabled className="w-100  btn  justify-content-center  btn-primary"   ref={loader} style={{display:'none'}}>

        <ReactLoading type={'spokes'  } color={'#ffff' } height={30} width={30}   />

      
      </button>

      </div>

      
    </form>

    </div>

  )
}

export default memo(EnterEmail)