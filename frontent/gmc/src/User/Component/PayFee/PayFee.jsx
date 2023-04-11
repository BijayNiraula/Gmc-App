import React, { useRef } from 'react'
import BackButton from '../../../RepeatedComponent/BackButton'
import logo from "../../../Assets/logo.jpg"
import esewa from "../../../Assets/esewa.jpg"
import { ToastContainer, toast } from 'react-toastify';
import ReactLoading from 'react-loading';

import { memo } from 'react';
import khalti from '../../../Assets/khalti.jpg'
function FeeDetail(props) {

  const continueText=useRef()
  const loader=useRef()
  const lowAmountNotify = () => {
    toast.info('Amount must be greater than 500 and less than 20000 ', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }



  function post(path, params) {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);



    
    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }



  const payFee = (e) => {
    e.preventDefault()
    continueText.current.style.display='none'
    loader.current.style.display='flex'
    var email = e.target[0].value;
    var amount = e.target[1].value;
    var remarks = e.target[2].value;
    var method;
    if (e.target[3].checked) {
      method = 'esewa'
    } else {
      if (e.target[4].checked) {
        method = 'khalti'
      }
    }
    if (amount >= 500 && amount <= 25000) {
      var dataObj = {
        amt: amount,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: amount,
        pid: "12345",
        scd: "EPAYTEST",
        su: "http://merchant.com.np/page/esewa_payment_success",
        fu: "http://merchant.com.np/page/esewa_payment_failed"
      }
      console.log(dataObj)


      if (method == "esewa"){
        var path = "https://uat.esewa.com.np/epay/main";
        post(path, dataObj)
  
      }
       
    } else {
      lowAmountNotify()
    }
    continueText.current.style.display='block'
    loader.current.style.display='none'
  }




  return (
    <div className='container pay-fee'>
      <ToastContainer />

      <BackButton link="/" />
      <div className="w-100 mt-2  payment-form ">

        <main className='d-flex justify-content-center row'>
          <div className='col-lg-9 col-sm-7 col-md-6 col-11'>

            <div className=" text-center">
              <img className="d-block mx-auto mb-2" src={logo} alt="" width="100" height="100" />
              <h2 className='fw-bold fs-3 mt-1'>GMC Fee Payment Form</h2>

            </div>


            <form className="  row  m-0 mt-3" onSubmit={payFee} >
              <div className="row g-3 col-lg-7 ">

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-muted">(Required)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="Enter the email to get notification" required />

                </div>
                <div className="col-12">
                  <label htmlFor="amount" className="form-label">Amount <span className="text-muted"> ( Required )</span></label>
                  <input type="Number" className="form-control" id="amount" placeholder="Amount " required />
                </div>

                <div className="col-12">
                  <label htmlFor="remarks" className="form-label">Remarks  <span className="text-muted"> ( Required )</span></label>
                  <input type="text" className="form-control" id="remarks" placeholder="describe  about this Transaction" required />
                </div>
              </div>
              <div className=" col-lg-4  mt-lg-0 mt-3 border ps-sm-4  ms-lg-4 pt-3 border-start-2 border-end-0 border-top-0 border-bottom-0  border-dark ">

                <h4 className="mb-2 fs-5 fw-bold ">Payment Method :</h4>
                <div className='ms-sm-5 h-'>

                  <div className="form-check fw-bold ">
                    <input name="paymentMethod" type="radio" className="form-check-input border border-dark " value='esewa' checked id='esewa' required />
                    <label className="form-check-label text-success" htmlFor="esewa">
                      <img src={esewa} width='35' className='ms-1 me-1' height='35' alt="" />
                      Esewa</label>
                  </div>

                  <div className="form-check fw-bold mt-3">
                    <label htmlFor="khalti"> <img src={khalti} width='90' className='ms-1 me-1' height='35' alt="" />
                    </label>
                    <input name="paymentMethod" value='khalti' id='khalti' type="radio" className="form-check-input border border-dark" required="" />
                  </div>

                </div>
                <div className="text-center mt-lg-5 mt-4" >

                <button className="w-100 mx-3 btn fw-bold text-light   btn-primary" ref={continueText} type="submit">
       cotinue
        

    </button>
      <button disabled className="w-100 mx-3 btn  justify-content-center  btn-primary"   ref={loader} style={{display:'none'}}>

        <ReactLoading type={'spokes'  } color={'#ffff' } height={30} width={30}   />

      
      </button>

                </div>

              </div>

              <hr className="my-4" />
            </form>
          </div>

        </main>


      </div>
    </div>
  )
}

export default memo(FeeDetail)