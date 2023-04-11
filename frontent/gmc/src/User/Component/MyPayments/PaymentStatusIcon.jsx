import React from 'react'
import { memo } from 'react'

function PaymentStatusIcon(props) {
  return (
    <>
    <span className={  `  p-1  me-sm-2 status-indicator border w-100 h-100 bg-${ props.status=="accepted"? "success" :"" }${ props.status=="checking"? "warning" :"" }${ props.status=="rejected"? "danger" :"" } px-sm-3 px-2 py-1 rounded-pill ` }   fw-bold> {props.status}</span>
    
    </>
     
    )
}

export default memo(PaymentStatusIcon)