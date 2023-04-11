import React, { useRef, useState } from 'react'
import fetchdata from '../../../Module/fetchdata'
import ReactLoading from 'react-loading';
import { memo } from 'react';
import defualtProfileImg from '../../../Assets/defaultProfileImg.jpg'
import {errorToast,infoToast,successToast} from '../../../Module/ToastModule'
import { baseUrl } from '../../../Module/Data';

function EditUserModal(props) {
  console.log(props)

  const resetBtn=useRef()
  const closeBtn=useRef()
  const submitBtn=useRef()
  const loader=useRef()
const pp = useRef()

const previwImg=(e)=>{
  const file=e.target.files[0]
  if(file.size > 100000 ){
    e.target.value=""
    pp.current.src=defualtProfileImg
    errorToast('image size should be less than 75 kb')
    return ;
  }
  if( file.type=="image/png" || file.type=="image/jpeg" ){
    pp.current.src=URL.createObjectURL(file)


  }else{
   infoToast("Only png and jpg image are allowed")
  }
}




   const editUserDetail=async(e)=>{ 
    e.preventDefault()
    loader.current.style.display='flex';
    submitBtn.current.style.display='none';

    const img=e.target[1].files[0];
      var dataObj = {
        "_id":props.detail._id,
        "email": e.target[3].value,
        "name": e.target[4].value,
        "class": e.target[5].value,
        "rollNo": e.target[6].value,
        "dob": e.target[7].value,
        "bus": e.target[8].value,
        "faculty": e.target[9].value,
        "dueAmt": e.target[10].value,
        "subjects": e.target[11].value,
        "address":e.target[12].value
      }
      if(img){
        const fileReader=new FileReader()
        const base64 =fileReader.readAsDataURL(img)
         fileReader.onload=async function(){
          dataObj.pp=fileReader.result;


          var data=await fetchdata( JSON.stringify(dataObj),baseUrl+"/admin/user/editUserDetail")
          console.log(data)
          if(data.success){
            successToast(data.success)
            props.edit(dataObj)
           resetBtn.current.click()  
           closeBtn.current.click()
          }else{
            errorToast(data.error)
        
          }
        
         loader.current.style.display='none';
         submitBtn.current.style.display='';
        }

       
      }else{

          var data=await fetchdata( JSON.stringify(dataObj),baseUrl+"/admin/user/editUserDetail")
          if(data.success){
            dataObj.pp=props.detail.pp
            props.edit(dataObj)
           resetBtn.current.click()  
           closeBtn.current.click()
          }else{
            errorToast(data.error)
        
          }
          console.log(data)
          
       
        loader.current.style.display='none';
        submitBtn.current.style.display='';
      }
   }
    return (
      <div className=" edit-user d-flex  justify-content-center align-items-center"    >
      <form className='  bg-light ' onSubmit={(e)=>editUserDetail(e)} >
          <div className="d-flex  ">
            <div className="w-75  mt-2 d-flex justify-content-end ">
          <h1 className='fs-3 me-5 '>
          Edit  Student Detail
            </h1>  
            </div>  
            <div className="w-25 d-flex justify-content-end">
            <button onClick={()=>{props.controlModal(false)}} ref={closeBtn} type='button'  className='btn btn-danger p-0 me-2 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
              </button>
              </div>          
  
            </div>
    <hr className='' />
       <div className=" d-flex justify-content-center">
        {
          props.detail.pp?
        <img src={props.detail.pp} ref={pp} className='rounded-circle border border-warning border-2 p-1' width='150' height='150' alt="" />
        : <img src={defualtProfileImg} ref={pp} className='rounded-circle border border-warning border-2 p-1' width='150' height='150' alt="" />
       
        }
       </div>
       <div className="d-flex justify-content-center  mt-2      ">
            <input type="file" id='img2'   onChange={previwImg}   className='d-none' />
            <button type='button'>
           <label htmlFor="img2">
  
            upload Img
            </label>
            </button>
       </div>
          <div className="p-4 row m-0 ">
          <div className="form-group  col-5 fw-bold  ">
  <label htmlFor="email">Email :</label>
  <input type="email" className="form-control border border-dark " defaultValue={props.detail.email} required/>
  </div>
  <div className="form-group  fw-bold col-3">
  <label htmlFor="name">Name :</label>
  <input type="text" className="form-control border border-dark"  defaultValue={props.detail.name}   required/>
  </div>
  <div className="form-group fw-bold col-2">
  <label htmlFor="email">Class :</label>
  <input type="number" className="form-control border border-dark "  defaultValue={props.detail.class}  required/>
  </div>
  <div className="form-group  col-2 fw-bold">
  <label htmlFor="email">Roll NO :</label>
  <input type="number" className="form-control border border-dark"  defaultValue={props.detail.rollNo}   required/>
  </div>
  <div className="form-group pt-2 col-3 fw-bold">
  <label htmlFor="email">D O B :</label>
  <input type="text" className="form-control border border-dark"  defaultValue={props.detail.dob}  required/>
  </div>
  <div className="form-group pt-2 col-3 fw-bold">
  <label htmlFor="email">Bus Service :</label>
  
  {
    props.detail.bus=='yes'?
  <select className=" pt-2 form-control border border-dark  " aria-label=".form-select-sm example">
  <option value="yes" selected> default : yes</option>
   <option value="no">no</option>
  
  </select>
  
  :
  <select className=" pt-2 form-control border border-dark  " aria-label=".form-select-sm example">
   <option value="yes">yes</option>
   <option value="no" selected> default : no</option>
  
   </select>
  }
  
  </div>
  <div className="form-group  pt-2 col-3 fw-bold">
  <label htmlFor="email">faculty :</label>
  
  <input type="text" className="form-control border border-dark"  defaultValue={props.detail.faculty}  required/>
  </div>
  <div className="form-group  pt-2 col-3 fw-bold">
  <label htmlFor="email"> Due Amt :</label>
  
  <input type="number" className="form-control border border-dark"  defaultValue={props.detail.dueAmt}  required/>
  </div>
  <div className="form-group col-8 pt-2  fw-bold">
  <label htmlFor="email">Subjects :</label>
  <input type="Subject" className="form-control border border-dark"  defaultValue={props.detail.subjects}  required/>
  </div>
  <div className="form-group col-4 pt-2  fw-bold">
  <label htmlFor="email"> Address :</label>
  <input type="Subject" className="form-control border border-dark"  defaultValue={props.detail.address}  required/>
  </div>
  </div>
  
  <div className="d-flex justify-content-center  mt-1 pb-3">
    <button className="d-none" type='reset' ref={resetBtn}>reset</button>
    <button type="submit" className="btn btn-success w-50  fw-bold  fs-5" ref={submitBtn}>Update Detail</button>
          <button disabled className=" w-50   btn  justify-content-center  btn-success" ref={loader} style={{display:"none"}}  >

        <ReactLoading type={'spokes'  } className="bg-success" color={'#ffff' } height={30} width={30}   />

      
      </button>
  
  </div>
  </form>
  </div>
  
  
      )



 

 
}

export default memo(EditUserModal)