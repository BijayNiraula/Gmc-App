import React from 'react'
import esewaLogo from '../../../Assets/esewa.jpg'
import { Link } from 'react-router-dom'
import myDetail from '../../../Assets/mydetail.jpg'
import payFee from '../../../Assets/payFee.jpg'

function ActionSection() {
  return (
    <section className='options px-sm-2 py-sm-4 mt-sm-3'>
    <div className="row ">

        <Link to='/myprofile' className="col-lg-3 col-6 cards p-sm-3 ps-3  -dark  "> 
      <div className='d-flex  flex-column justify-content-center btn align-items-center '>
        <img src={myDetail} width="80" height="80" className='my-3' alt="" />
   
<p className='text-center fw-bold '>My Profile</p>
      </div>
    </Link>
    
   
    
    <Link to='/payFee' className=" col-lg-3  col-6 cards p-sm-3  pe-3  "> 
      <div className='d-flex  flex-column  align-items-center justify-content-center btn '>
        <img height="80" width='80' className=' my-3 '  src={payFee} alt="" />
   
<p className='text-center fw-bold '> Pay Fee </p>
      </div>
    </Link>
    
   
    <Link to='/mypayments' className="col-lg-3 col-6 cards p-sm-3 p-2 ps-3 -dark  "> 
      <div className='d-flex  flex-column justify-content-center btn'>
     


<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className=" my-3 w-100 bi bi-cash-coin" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
<path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
<path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
<path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg>
<p className='text-center fw-bold'>My Payments</p>
      </div>
    </Link>
    <Link to='feedetail' className="col-lg-3  col-6 cards p-sm-3 p-2 pe-3 -dark     "> 
      <div className='d-flex  flex-column justify-content-center btn h-100'>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-info-circle-fill w-100 my-3" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>
<p className='text-center fw-bold '>FAQ</p>
      </div>
    </Link>
    
    
    
</div>

















    
</section>

  )
}

export default ActionSection