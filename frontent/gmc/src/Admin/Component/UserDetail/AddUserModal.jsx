import React, { useRef, memo, useState } from 'react';
import fetchdata from '../../../Module/fetchdata';
import defualtProfileImg from '../../../Assets/defaultProfileImg.jpg'
import ReactLoading from 'react-loading';
import { errorToast,infoToast,successToast, warningToast } from '../../../Module/ToastModule';
import { baseUrl } from '../../../Module/Data';

function AddUserModal(props) {


  const resetBtn = useRef()
  const pp = useRef()
const submitBtn=useRef()
const loader=useRef()
  const previewPp = (e) => {
    var file = e.target.files[0];
    if(file.size > 100000 ){
      e.target.value=""
      pp.current.src=defualtProfileImg
      errorToast('image size should be less than 75 kb')
      return ;
    }

    if( file.type=="image/png" || file.type=="image/jpeg" ){
      pp.current.src = URL.createObjectURL(file);

    }else{
     infoToast("Only png and jpg image are allowed")
    }

   
  }


  

  const addUser = async (e) => {
    e.preventDefault()
    loader.current.style.display='flex';
    submitBtn.current.style.display='none';

    const img = e.target[1].files[0];
    
    var dataObj = {
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

    if (img) {
      const fileReader = new FileReader()
      const base64 = fileReader.readAsDataURL(img)
      fileReader.onload = async function () {
        dataObj.pp = fileReader.result;
        try {
          var data = await fetchdata(JSON.stringify(dataObj), baseUrl+"/admin/user/addUser")
          if (data.success) {
            successToast(data.success)
            resetBtn.current.click()
            props.controlAddUserModal(false)
          } else {
            errorToast(data.error)
          }
        } catch (e) {
          console.log(e)
          errorToast("could not connect to the server")
        }
        loader.current.style.display='none';
        submitBtn.current.style.display='';
    
      }
    } else {
      try {
        var data = await fetchdata(JSON.stringify(dataObj), baseUrl+"/admin/user/addUser");
        if (data.success) {
          successToast(data.success)
          resetBtn.current.click()
          props.controlAddUserModal(false)
        } else {
          errorToast(data.error)
        }
      } catch (e) {
        errorToast("could not connect to the server")
      }
      loader.current.style.display='none';
      submitBtn.current.style.display='';

    }
    console.log(data)
  }



  return (
    <div className=" edit-user  d-flex justify-content-center align-items-center">

      <form className='  bg-light ' onSubmit={(e) => addUser(e)}>
        <div className="d-flex  ">
          <div className="w-75  mt-2 d-flex justify-content-end ">
            <h1 className='fs-3 me-5 '>
              Add Student
            </h1>
          </div>
          <div className="w-25 d-flex justify-content-end">
            <button type='button' onClick={(e) => {
              resetBtn.current.click()
              pp.current.src = defualtProfileImg
              props.controlAddUserModal(false)
            }} className='btn btn-danger p-0 me-2 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>

        </div>
        <hr className='' />
        <div className=" d-flex justify-content-center">
          <img src={defualtProfileImg} ref={pp} className='rounded-circle bg-light border border-warning border-2 p-1 
          ' width='150' height='150' alt="" />

        </div>
        <div className="d-flex justify-content-center mt-2">
          <input type="file" onChange={previewPp} id='img' className='d-none' />
          <button type='button'>
            <label htmlFor="img">

              upload Img
            </label>

          </button>
        </div>

        <div className="p-4 row m-0 ">

          <div className="form-group  col-5 fw-bold  ">
            <label htmlFor="email">Email :</label>
            <input type="email" className="form-control border border-dark" required />
          </div>
          <div className="form-group  fw-bold col-3">
            <label htmlFor="name">Name :</label>
            <input type="text" className="form-control border border-dark" required />
          </div>


          <div className="form-group fw-bold col-2">
            <label htmlFor="email">Class :</label>
            <input type="number" className="form-control border border-dark " required />
          </div>
          <div className="form-group  col-2 fw-bold">
            <label htmlFor="email">Roll NO :</label>

            <input type="number" className="form-control border border-dark" required />
          </div>
          <div className="form-group pt-2 col-3 fw-bold">
            <label htmlFor="email">D O B :</label>

            <input type="text" className="form-control border border-dark" required />
          </div>
          
          <div className="form-group pt-2 col-3 fw-bold">
            <label htmlFor="email">Bus Service :</label>

            {/* <input type="" className="form-control border border-dark"   required/> */}

            <select className=" pt-2 form-control border border-dark  " aria-label=".form-select-sm example">
              <option value="yes" >Yes</option>
              <option value="no" >No</option>
            </select>
          </div>
          
          <div className="form-group  pt-2 col-3 fw-bold">
            <label htmlFor="email">Faculty</label>

            <input type="text" className="form-control border border-dark" required />
          </div>
          <div className="form-group  pt-2 col-3 fw-bold">
            <label htmlFor="email">Due Amt :</label>

            <input type="number" className="form-control border border-dark" required />
          </div>
          <div className="form-group col-8  pt-2  fw-bold">
            <label htmlFor="email">Subjects :</label>
            <input type="Subject" className="form-control border border-dark" required />
          </div>
          <div className="form-group col-4  pt-2  fw-bold">
            <label htmlFor="email">Address :</label>
            <input type="Subject" className="form-control border border-dark" required />
          </div>


        </div>
        <hr />
        <div className="d-flex justify-content-center mt-1 pb-3">
          <button type="reset" ref={resetBtn} className="btn btn-danger me-5  fw-bold d-none">Reset </button>
          <button type="submit" className="btn btn-success w-50  fw-bold  fs-5" ref={submitBtn}>Add User</button>
          <button disabled className=" w-50   btn  justify-content-center  btn-success" ref={loader} style={{display:"none"}}  >

        <ReactLoading type={'spokes'  } className="bg-success" color={'#ffff' } height={30} width={30}   />

      
      </button>



        </div>
      </form>
    </div>
  )
}

export default memo(AddUserModal)