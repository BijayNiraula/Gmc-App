import React from 'react'
import { Link } from 'react-router-dom'
function BackButton(props) {
  return (
    <Link to={props.link} className='btn mt-2'>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
     <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
   </svg>
   </Link>
  )
}

export default BackButton