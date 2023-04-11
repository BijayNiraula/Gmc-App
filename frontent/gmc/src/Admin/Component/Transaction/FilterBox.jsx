import React, { useRef } from 'react'
import { infoToast, warningToast } from '../../../Module/ToastModule';
import { memo } from "react";

function FilterBox(props) {
  const today=''
 
  
  const applyFilter=(e)=>{
    e.preventDefault();
    var fObj={}
     if(e.target[1].checked){
      
     }
     else if(e.target[2].checked){
      fObj.status="checking"

     }
     else if(e.target[3].checked){
      fObj.status="accepted"
     }
     else if(e.target[4].checked){
      fObj.status="rejected"
     }
    var s_Id=e.target[0].value
    var from= new Date(e.target[5].value).getTime()
    var to =new Date(e.target[6].value).getTime()
    if(from){
     fObj.from=from
    }else{
      if(s_Id!=""){
        fObj.from=Date.now() -  31557600000
      }else{
        fObj.from=Date.now() - 604800000
      }
    }
    if(to){
      fObj.to=to
     }else{
       if(s_Id!=""){
         fObj.to=fObj.from +  31557600000
       }else{

         fObj.to=(fObj.from + 604800000)
       }
     }
     if(s_Id !="" ){
      fObj.s_Id=s_Id
     
    } else{
      if(fObj.to-fObj.from >604800000+10000 ){
        infoToast('Warning : you can only obtain the data between 1 weeks in  per request if you are searching without student id')

        return 0
      }
    }
   props.getData(fObj)
  }





  return (
    <div className="      px-3 py-3 filter-box bg-light   " style={{width:"250px"}}>

      <div className=" d-flex justify-content-end">
        <button onClick={()=>props.controlFilter(false)} className='btn btn-danger p-0 '><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
      </div>

    <form onSubmit={applyFilter}  >

<h5 className=' text-success ms-1 mt-3'>Id Filter : </h5>
      
      <div className=" ms-3">

    <label htmlFor="inputPasword6" className=" fw-bold small me-4">Id : </label>
    <input type="text" id="" className="" placeholder='enter the id of student'/>
  
       
      </div>
      <hr className="mx-2" />

      <h5 className=' text-success ms-1 d-flex '>Status filter : </h5>
      <div className=' ms-4'>
      <div className="form-check">
  <input className="form-check-input border border-dark border-1"  defaultChecked value="all" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
  <label className="form-check-label fw-bold small" htmlFor="flexRadioDefault4">
    All
  </label>
</div>
      <div className="form-check">
  <input className="form-check-input border border-dark border-1" value='checking' type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label fw-bold small" htmlFor="flexRadioDefault1">
    checking
  </label>
</div>
<div className="form-check">
  <input className="form-check-input border border-dark" type="radio" value="accepted" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label fw-bold small" htmlFor="flexRadioDefault2">
    Accepted
  </label>
</div>
<div className="form-check">
  <input className="form-check-input border border-dark" value='rejected' type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
  <label className="form-check-label fw-bold small" htmlFor="flexRadioDefault3">
    rejected
  </label>
</div>
</div>
      <hr className="mx-2" />

<h5 className=' text-success ms-1 '>Date Filter : </h5>

<div className="d ms-3">

<div className="  ">
<label htmlFor="inputPasword6"  className=" fw-bold small me-2">From  : </label>
<input type="date" id="" max={today} className="" />

</div>
  <div className=" mt-3 ">
<label htmlFor="" className="fw-bold small me-4">To : </label>
<input type="date" id=""  max={today}  className="" aria-labelledby="passwordHelpInline"/>
</div>
</div>
      <hr className="mx-2" />

        <div className="d-flex justify-content-around w-100 ">
          <button type='reset' className='btn btn-danger'> Reset</button>

          <button className='btn btn-success'> Apply</button>
        </div>
       </form>
    </div>

  )
}

export default memo(FilterBox)