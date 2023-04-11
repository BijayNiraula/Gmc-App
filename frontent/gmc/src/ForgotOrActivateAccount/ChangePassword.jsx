import React from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import { memo,useRef } from 'react'
import { errorToast, warningToast, successToast } from '../Module/ToastModule';
import fetchdata from '../Module/fetchdata';
import ReactLoading from 'react-loading';
import { baseUrl } from '../Module/Data';
import RemainingTimeCounter from './RemainingTimeCounter';
function ChangePassword(props) {
  const navigate = useNavigate()

  const text=useRef()
  const loader=useRef()
  const changePassword =async(e) => {
    e.preventDefault()
   
    loader.current.style.display='flex';
    text.current.style.display='none'

    
    if (e.target[1].value.length <= 4) {
      warningToast('Password length must be greater than 4 character')
      loader.current.style.display='none';
      text.current.style.display=''

      return false;
    }
    const data = {
      "email": props.email,
      "otp": e.target[0].value,
      "newPassword": e.target[1].value
    }
   const d= await fetchdata(JSON.stringify(data),baseUrl+"/authenticate/changePassword")
   loader.current.style.display='none';
   text.current.style.display=''
        if (d.success) {
          successToast(d.success)
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 2000);
        }else{
        
          errorToast(d.error)

        }
        
  }
  return (
    <div className="change-password">
      <form className='border pb-3 pt-2 px-sm-3 px-2' onSubmit={changePassword} >
        <Link to='/' className='btn mt 1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
        </Link>
        <p className='email-info px-1 mt-2 text-center'>  Otp is Send to  Email : <span className='text-info'>
          {
            props.email
          }
        </span>  </p>
        <RemainingTimeCounter/>
        

        <div className="mx-ms-5 mx-3 mt-4 ">
          <input type="number" className="form-control " placeholder="Enter Otp " required />
        </div>
        <div className="mt-3 mx-ms-5 mx-3">
          <input type="password" className="form-control " placeholder="Enter New Password" required />
        </div>
        <div className=" d-flex justify-content-center px-3">


        
<button className="w-100 mx-3 btn  mt-4 btn-primary" ref={text} type="submit">
Change Password
  

</button>
<button disabled className="w-100  btn  justify-content-center  btn-primary mt-4"   ref={loader} style={{display:'none'}}>

  <ReactLoading type={'spokes'  } color={'#ffff' } height={30} width={30}   />


</button>

</div>
      
      </form>
    </div>
  )
}

export default memo(ChangePassword)