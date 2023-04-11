import React from 'react'
import ChangePassword from './ChangePassword'
import { useState } from 'react'
import EnterEmail from './EnterEmail';
import { useCallback } from 'react';

function ForgotOrActivate() {
const[email,setEmail]=useState(null);

const getEmail= useCallback((e)=>{
    setEmail(e)

},[])
if(email==null){
   
    return (
        <div>
    <EnterEmail getEmail={getEmail}/>
    
        </div>
      )

}else{
    return (
        <div>
    
     <ChangePassword email={email}/>
    
        </div>
      )

}
 
}

export default ForgotOrActivate