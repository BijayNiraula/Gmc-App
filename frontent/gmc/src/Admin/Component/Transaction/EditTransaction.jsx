import React from 'react'
import { useState } from 'react'
import { memo } from "react";
function EditTransaction() {
const [state, setState] = useState(true);
   
    const submit=(e)=>{
    e.preventDefault()
     const data={
        "_id":"12",
        "status":e.target[0].value,
        "amount":e.target[1].value,
        "detail":e.target[2].value
        
        
     }
   }
  if(state){



  return (
    <div className='Edit-transaction   p-5'>
        <div  style={{width:"550px"}} className='p-4 mod'> 
        <div className=" d-flex justify-content-end">
        <button  className='btn btn-danger p-0 ' onClick={()=>{
            setState(null)

        }} ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
      </div>

      <form action="" onSubmit={submit}>
      <label htmlFor="" className="form-label fw-bold">Status : </label>
      <select className="form-select" aria-label="Default select example" required>
  <option value="pending">Pending</option>
  <option value="accepted">Accepted</option>
  <option value="rejected">Rejected</option>
</select>

        <div className="mb-3 mt-3">
  <label htmlFor="" className="form-label fw-bold" >Amount : </label>
  <input type="Number" className="form-control" required id="" />
</div>

<div className="mb-3">
  <label htmlFor="" className="form-label fw-bold">Detail :</label>
 <textarea name="" className='w-100 form-control' required id="" cols="100" rows="5"></textarea>
</div>
<div className="d-flex justify-content-center">

    <button className="btn btn-success">
        Save
    </button>
</div>

</form>
   


        </div>
       
    </div>


    )
}
else{

    return(
        <>
        </>
    )
}
}

export default memo(EditTransaction)