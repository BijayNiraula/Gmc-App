import React from 'react'

import PaymentStatusIcon from './PaymentStatusIcon'
import { memo } from 'react'

function PaymentHistoryCard(props) {
  var date=new Date(props.time);
  var d=  "Date : " + date.getFullYear() + "-"+(date.getMonth()+1)  + "-" + date.getDate()  + "  time : " + date.getHours() +"-" +date.getMinutes()
  return (
    <div className="history   row mb-4 ">
              <div className="col-8">
                     <div className='w-100 border'>
                      <p className='ms-md-5 ms-2 mt-2  w-100 information'>

                        <span className='me-sm-2 me-2'>
                          Amount 
                        </span>
                        :
                        <span className='ms-sm-3 ms-2 text-success fw-bold'>
                        {props.amount}
                        </span>

                        <br />

                        <span className='me-sm-2 me-2'>
                         Detail 
                        </span>
                        :
                        <span className='ms-sm-3 ms-2 text-success fw-bold'>
                        
                           {props.detail}
                        </span>

                      </p>
                       <span>
                        
                        </span> 

                     </div>
              </div>
                   <div className="col-4 ">
                    <div className="text-end  pt-3">
  <PaymentStatusIcon status={props.status}/>
                    </div>
                        <br />
                        <div className='text-end w-100'>
                          <p className='date w-100'>
                        <span className='me-1 me-sm-2'> 
                        {d}
                          </span> 
                        
                            
                            
                            </p>

                        </div>
                        
                   </div>
            </div>








  )
}

export default memo(PaymentHistoryCard )