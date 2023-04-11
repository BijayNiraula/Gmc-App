import React, { useCallback, useRef } from 'react'
import { memo,useState } from 'react' 
import defualtProfileImg from '../../../Assets/defaultProfileImg.jpg'

import EditUserModal from './EditUserModal'
function TableRow(props) {
   const [editUserModal, setEditUserModal] = useState(false);
   const controlModal=useCallback((a)=>{
    setEditUserModal(a)

   },[])

  return (

    <tr>
      {
        editUserModal?
       < EditUserModal edit={props.edit} controlModal={controlModal} detail={props.detail}/>
      :
        ""
      }
      <td><small className='fw-bold' style={{fontSize:'12px'}}>{props.detail._id}  </small></td>
      <td  >
{
props.detail.pp?

<img  src={props.detail.pp} className='rounded-circle' width='80' height='80' alt="" /> 

:


<img  src={defualtProfileImg} className='rounded-circle' width='80' height='80' alt="" /> 

}
</td>
      <td>{props.detail.name}</td>
        <td>{props.detail.email}</td>
      <td> 
      <button onClick={()=>{controlModal(true)}}   className="btn btn-outline-info ms-2"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-pencil-fill text-success" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</button>
        <button className="btn btn-outline-warning mx-2" onClick={()=>{
         const d=window.confirm("Do you want to delete the user Mr. "+props.detail.name);
         if(d){
          props.deleteUser(props.detail._id)}}  
  
         }>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-trash-fill text-danger" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button> </td>
    </tr>
  )
}

export default memo( TableRow)