import React from 'react'
import { memo } from 'react';
function TransactionRow(props) {
  
  var date=new Date(props.time);
  var d=  "Date : " + date.getFullYear() + "-"+(date.getMonth()+1)  + "-" + date.getDate()  + "  time : " + date.getHours() +"-" +date.getMinutes()
 
  return (
<tr>
<td >{props._id}</td>
<td >{props.s_Id}</td>
      <td>{d}</td>
      <td>
           {props.detail}
      </td>
      <td>{props.amount}</td>
      <td>{props.status}</td>

      <td>
      
      <button   className="btn btn-outline-success fw-bold "  onClick={()=>{
        if(props.status=="accepted"){
          return 
        }
         const d=window.confirm("Do you want to Accept  this transaction ");
         if(d){
          props.editTransaction({"_id":props._id,"s_Id": props.s_Id,"status":"accepted","amount":props.amount})

        }}  
  
         }  >  
         Accept
</button>

        <button className="btn btn-outline-danger  fw-bold mt-3" onClick={()=>{
          if(props.status=="rejected"){
             return
          }
         const d=window.confirm("Do you want to Reject  this transaction");
         if(d){
          props.editTransaction({"_id":props._id,"s_Id": props.s_Id,"status":"rejected","amount":props.amount})
        }}  
  
         }>
          Reject
          </button>


      </td>
    </tr>

    )
}

export default memo(TransactionRow)