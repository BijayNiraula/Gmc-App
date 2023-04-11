import React from 'react'
import BackButton from '../../../RepeatedComponent/BackButton'
import PaymentHistoryCard from './PaymentHistoryCard'
import { memo } from 'react'

function MyPayments(props) {
  return (


    <div className='container my-payments'>
        <BackButton link="/"/>
        <div className="w-100 ">
          <h3 className='text-center fw-bold fs-2 '>Payment History</h3>
          <hr className="p-0 mx-5" />

          <div className="w-100 d-flex align-items-center flex-column">
           
                          


{
   props.transction.length?
       props.transction.map((d)=>{
        return(

          <PaymentHistoryCard key={d.time} amount={d.amount} detail={d.detail} status={d.status} time={d.time} />

        )
       }):
        <div className=' text-center py-3 mt-5'>
           <h5 className='text-success fs-6 '> no data found ?</h5>
          </div>


}



          </div>
        </div>
        

    </div>
  )
}

export default memo(MyPayments)