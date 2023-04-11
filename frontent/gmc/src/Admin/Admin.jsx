import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './css/admin.css'
import AdminActivities from "./Component/AdminActivities/AdminActivities"
import SideBar from './SideBar'
import UserDetail from './Component/UserDetail/UserDetail'
import { Routes, Route , BrowserRouter } from 'react-router-dom'
import Transaction from './Component/Transaction/Transaction';
import Dashboard from './Component/Dahsboard/Dashboard';
import { memo ,useState,useEffect} from "react";
import fetchdata from "../Module/fetchdata"
import AuthContext  from '../Context/AuthContext';
import { useContext } from 'react';
import LodingApp from '../RepeatedComponent/LodingApp';
import { baseUrl } from '../Module/Data';
function Admin() {
const [state, setstate] = useState(null);
const auth=useContext(AuthContext)
const fetchInformation=async()=>{
  const data= await fetchdata(JSON.stringify({}),baseUrl+"/admin/information/getInformation")
  console.log(data)
  if(data.success){
    setTimeout(() => {
    setstate(data.data)
      
    }, 3000);
    return 1;
  }
  localStorage.removeItem('auth')
  auth.logout()
}
  useEffect(  () => {
       fetchInformation()
   
  }, []);

   if(state==null){
    return (
      <LodingApp/>
    )
   }

  return (
    <BrowserRouter>

    <div className='admin-pannel '>
      <div className="container ">
        <div className="row">
          <div className="col-3 p-0 d-flex justify-content-center border border-dark">
         
           <SideBar/>
          </div>
          <div className="col-9 px-2 p-0 user-detai " style={{maxHeight:"100vh"}}>

           <Routes>
          <Route path='/' element={<Dashboard  information={state}/>}/>
          <Route path='*' element={<Dashboard  information={state}/>}/>

          <Route path='/UserDetail' element={ <UserDetail />}/>
          <Route path='/activities' element={ <AdminActivities />}/>
          <Route path='/transaction' element={ <Transaction />}/>
           </Routes>
 <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>

  )
}

export default memo(Admin)