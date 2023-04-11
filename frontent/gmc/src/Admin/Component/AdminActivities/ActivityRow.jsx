import React from 'react'
function ActivityRow(props) {
    var date=new Date(props.time);
    var d=  "Date : " + date.getFullYear() + "-"+(date.getMonth()+1)  + "-" + date.getDate()  + "  time : " + date.getHours() +"-" +date.getMinutes()
   
  return (
<tr>
<td >{props._id}</td>
<td >{
        
       d
    }</td>
      <td>{props.detail}</td>
      
      
      
    </tr>

    )
}

export default ActivityRow