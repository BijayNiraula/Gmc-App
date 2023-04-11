import React from 'react'
import logo from '../Assets/logo.jpg'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import { useContext } from 'react';
import ReactLoading from 'react-loading';
import { useRef } from 'react';
import { infoToast,errorToast } from '../Module/ToastModule';
import fetchdata from '../Module/fetchdata';
import { baseUrl } from '../Module/Data';

function Login() {
  
  const auth=useContext(AuthContext)


  const loader=useRef();
  const loginText=useRef();


  


    const login= async(e)=>{
      
       e.preventDefault();
       loader.current.style.display="flex"
       loginText.current.style.display="none"
      
        var data={
          "email":e.target[0].value,
          "password":e.target[1].value
        }
        data=JSON.stringify(data)

        const d= await fetchdata(data,baseUrl+"/authenticate/login");
       loader.current.style.display="none"
       loginText.current.style.display="block"
        if(d.auth){
          localStorage.removeItem("auth")
           
           localStorage.setItem("auth",JSON.stringify({"token":d.token,"role":d.role,"auth":d.auth}))
           auth.login(d)
        }else{
        errorToast(d.error)
        localStorage.removeItem("auth")
        }
      
     
      }

  return (

    
  <div className='login d-flex justify-content-center align-items-center'>

    <form className='border' onSubmit={login} >

      <h1 className="fs-4 text-center mt-3 mb-3 ">Welcome to GMC App</h1>

        <div className='d-flex justify-content-center '>


      <img className="mb-4" src={logo} alt="" width="72" height="72"/>
      </div>

      <div className="mx-3 ">
        <input type="email" className="form-control "  placeholder="Enter your email " required/>
      </div>
      <div className="mt-3 mx-3">
        <input type="password" className="form-control "  placeholder="Enter your password" required/>
      </div>

  
      <div className="checkbox mb-3 mt-4 ms-3">
        <label>
          <input type="checkbox" value="remember-me" checked /> Remember me
        </label>
      </div>
      <div className=" d-flex justify-content-center">


        
      <button className="w-100 mx-3 btn   btn-primary" ref={loginText} type="submit">
       Login
        

    </button>
      <button disabled className="w-100 mx-3 btn  justify-content-center  btn-primary"   ref={loader} style={{display:'none'}}>

        <ReactLoading type={'spokes'  } color={'#ffff' } height={30} width={30}   />

      
      </button>

      </div>

      <p className=' mt-2 text-center'>
        <Link to='/forgot'>Activate | forgot Password</Link>
      </p>
      <p className="mt-4  text-muted text-center">© Developed By <a href="https://bijay-niraula.com.np/"> bijay niraula. </a> </p>
    </form>

  </div>

    )
}

export default Login