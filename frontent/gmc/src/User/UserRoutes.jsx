import React from 'react'
import MyProfile from "./Component/myProfile/MyProfile"
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import PayFee from "./Component/PayFee/PayFee";
import MyPayments from "./Component/MyPayments/MyPayments";
import { useState } from 'react'
import { useEffect } from 'react';
import fetchdata from '../Module/fetchdata';
import Home from "./Component/Home/Home"
import AuthContext from '../Context/AuthContext';
import { useContext } from 'react';
import { errorToast } from '../Module/ToastModule';
import FeeDetails from "./Component/FeeDetails/FeeDetails"
import LodingApp from '../RepeatedComponent/LodingApp';
import { baseUrl } from '../Module/Data';
function UserRoutes() {
   const [detail,setDetail]=useState(null);
   const auth=useContext(AuthContext)
   
    const fetchInformation=async()=>{

      const d=await fetchdata(JSON.stringify({}),baseUrl+"/user/")
       
           
            if(d.error){
              
              localStorage.removeItem("auth")
                errorToast(d.error)
              auth.logout()

              
            }else{
              setTimeout(() => {
               setDetail(d)
                
              }, 3000);

            }
    }
    
    useEffect(() => {
        fetchInformation()
    }, []);
 

    if(detail==null ){
  return(
    <>
       
    <LodingApp/>
    </>
  )


    }else{
     return (
     
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home name={detail.detail.name} pp={detail.detail.pp} email={detail.detail.email}/>}/>
        <Route path="*" element={<Home name={detail.detail.name} pp={detail.detail.pp} email={detail.detail.email}/>}/>
        
           <Route path="/MyProFile" element={<MyProfile detail={detail.detail} />}/>
           <Route path="/MyPayments" element={<MyPayments transction={detail.transaction} />}/>
           <Route path="/feedetail" element={<FeeDetails />}/>
           
           <Route path="/PayFee" element={<PayFee data={detail} />}/>
        </Routes>
        </BrowserRouter>
    
        )

    }
}

export default UserRoutes