import React from 'react'

function Dashboard(props) {
  return (
    <div className='w-100 h-100 border border-dark  dashboard'>

        <h5 className=' mt-4 ms-5   fs-4'>Dashboard</h5>
        <hr className='mx-3 '/>
        <div className="row w-100 m-0 p-0   justify-content-around mt-5">

            <button className="btn btn-success  col-3 pt-2 pb-4   cade">
               <small className='' >
               Total Student
               </small>
               <br className=' ' />
               <small className='fs-4 p-5 '>
             {
                props.information.totalStudent
             }
               </small>

            </button>
            <button className="btn  btn-secondary col-3  pt-2 pb-4   cade">
               <small className=' ' >
               Active Student
               </small>
               <br className='' />
               <small className='fs-4 '>
              1
               </small>

            </button>
            <button className="btn  btn-warning px-4 col-3 pb-4   cade">
               <small className=' ' >
               Total View
               </small>
               <br className='' />
               <small className='fs-4 '>
            1
               </small>

            </button>

        </div>
        <hr className='m-4 mb-0' />

      




    </div>
  )
}

export default Dashboard