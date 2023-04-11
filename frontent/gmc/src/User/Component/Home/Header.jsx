import React from 'react'
import logo from '../../../Assets/logo.jpg'
import Logout from './Logout'

function Header() {
  return (
<div>
<header className='w-100 header bg-light d-flex justify-content-between'>
        <div className='d-flex  align-items-center'>

      <img src={logo} width="80" height='80' alt="" />
      <h1>GMC</h1>
      </div>
      <div className='d-flex justify-content-center align-itmes-center'>
      <Logout/>
      </div>

    </header>
    
</div>
    )
}

export default Header