import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

    const errorToast = (t) =>{
        toast.error(t, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
      } 
      const successToast = (t) =>{
        toast.success(t, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
      } 
      const infoToast = (t) =>{
        toast.info(t, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
      } 
      const warningToast = (t) =>{
        toast.warning(t, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
      } 


      export {warningToast,errorToast,successToast,infoToast}