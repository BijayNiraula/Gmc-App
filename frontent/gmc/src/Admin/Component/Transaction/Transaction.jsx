import React, { useCallback } from 'react'
import { useRef,useState } from 'react'
import FilterBox from './FilterBox'
import TransactionRow from './TransactionRow'
import { errorToast } from '../../../Module/ToastModule'
import ReactLoading from 'react-loading';
import { useEffect } from 'react'
import { infoToast,successToast } from '../../../Module/ToastModule'
import { memo } from "react";
import fetchdata from '../../../Module/fetchdata';
import { baseUrl } from '../../../Module/Data'


function Transaction() {
  var filter=useRef()
  const  loader=useRef()
  const [state, setState] = useState([]);
  
 const getData=useCallback (async(f)=>{
  setState([])
  loader.current.style.display='flex'
  const data=await fetchdata(JSON.stringify(f),baseUrl+"/admin/transactions/getTransactions");
  if(data.success){
    if(data.data.length){
      setState(data.data)
    
    }else{
    infoToast('No Data Found')


    }
  }else{
  errorToast(data.error)

  }
  loader.current.style.display='none'
  console.log(data)


 },[]) 



 const editTransaction=useCallback(async(d)=>{
  
   
    const data=await fetchdata(JSON.stringify(d),baseUrl+"/admin/transactions/editTransactions");
    if(data.success){
        successToast(data.success)
        setState(s=>{
          const index=s.findIndex((i)=>i._id==d._id)
           var arr=[...s];
           arr[index].status=d.status
           return arr;
          })

    }else{
      errorToast(data.error)
    }
   

 },[])

 useEffect(() => {
  var a=Date.now()

   getData({"to":a,"from": a-604800000})
 }, []);


  var controlFilter=(action)=>{
    if(action) filter.current.style.display='block';
    else filter.current.style.display='none'
  }
    
  return (

  <div className="w-100 h-100  transaction " style={{overflowY:"scroll"}}>
    <h1 className='fs-2 text-center mt-4'>
    Transactions 
    </h1>
    <hr className='mx-5 mb-3' />
    <div className="d-flex justify-content-between " >

      <button className='btn btn-outline-danger'onClick={()=>  getData({"to":Date.now(),"from":Date.now()-604800000})}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg></button>

    <button className='btn me-3 d-flex' onClick={()=>controlFilter(true)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-funnel " viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
</svg>
    </button>

    </div>
    <span className=' ' style={{display:"none"}}  ref={filter}>
    <FilterBox   getData={getData} controlFilter={controlFilter}/>
    </span>
<hr className='mx-5'/>

<table className="table-bordered border-dark table table-striped table-hover" >
  <thead>
    <tr>
      <th scope="col">T_Id</th>
      <th scope="col">S_Id</th>


      <th scope='col'> Date</th>
      <th scope='col'> detail</th>
      <th scope="col">Amount</th>
      <th>Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className="table-group-divider" >
   {
    state.length!=0?
    state.map((d)=>{
      return(
        <TransactionRow editTransaction={editTransaction} amount={d.amount} _id={d._id} status={d.status}  s_Id={d.s_Id} detail={d.detail} time={d.time}   />
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


<div>
  
</div>




  </div>

  )
}

export default memo(Transaction)