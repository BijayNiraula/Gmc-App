import React, { useCallback } from 'react'
import {errorToast, infoToast, warningToast ,} from '../../../Module/ToastModule'
import fetchdata from "../../../Module/fetchdata";
import ReactLoading from 'react-loading';

import { useState,useRef } from 'react'
import ActivityRow from './ActivityRow'
import { baseUrl } from '../../../Module/Data';
function AdminActivities() {
    const [state, setState] = useState([]);
  const  loader=useRef()

    const submit=useCallback(  async(e)=>{
        e.preventDefault()
        loader.current.style.display='flex'
        setState([])
          var from=new Date(e.target[0].value).getTime();
          var to=new Date(e.target[1].value).getTime();
          if(to-from > 2592000000  +10000){
            warningToast('the length between the search date should be less than 30 days')
          }
          var obj={"from":from,"to":to}
          console.log(obj)
          var data=await fetchdata(JSON.stringify(obj),baseUrl+"/admin/activities/getAdminActivities")
          console.log(data)
          if(data.success){
            if( data.data.length){
              setState(data.data)
     
            }else{
             infoToast("No data found")
            }
          }else{
            errorToast(data.error)
          }
        
        loader.current.style.display='none'

           
    },[])
  return (
    <>
      <div className="border w-100 h-100" style={{overflowY:"scroll"}}>
      <h1 className="mt-3 text-center ">
        Admin Activities
      </h1>
      <hr className='mt-3 mx-3' />
       <form className="d-flex justify-content-center" onSubmit={submit}>
        <div className='me-5'>
        <label htmlFor="from "  className='fw-bold'>From : </label>
         <input type="date"  className='ms-2' name="" id="from" required />
        </div>
         <div className=''>
         <label htmlFor="to " className='fw-bold'> To : </label>
        <input type="date" className='ms-3' id="to" required />
         </div>
         <div className=" ms-5">
        <button className='btn btn-info '>search</button>
       </div>
       </form>
       
       <hr className='mt-3 mx-3' />



       <table className="table-bordered border-dark table table-striped table-hover" >
  <thead>
    <tr>
      <th scope="col">A_id</th>
      <th scope="col">Date</th>


      <th scope='col'> Detail</th>
      
    </tr>
  </thead>
  <tbody className="table-group-divider" >
   {
    state.length!=0?
    state.map((d)=>{
      return(
        <ActivityRow   _id={d._id} detail={d.detail}  time={d.time}   />
      )

    })

     :
        ""
     
    
   }
  </tbody>
</table>

<div className=' align-items-center flex-column  mt-5' ref={loader} style={{ display: "none" }}>
            <ReactLoading type={'spokes'} color={'black'} height={60} width={60} />
            <span className='fs-5 mt-2 m-o p-0 fw-bold'>Loading</span>
          </div>










    {
      state.length==0?
      <div className="w-100 d-flex justify-content-center">
      <div className="mt-4  text-light fs-5 d-flex justify-content-center border px-5 py-2 bg-info " >
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi   bi-info-circle-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>
        <span className='ms-4'>
        select date to  get the information </span>  
      </div>
     </div>
     :""

    }




      







      </div>
    
    </>
   
  )
}

export default AdminActivities