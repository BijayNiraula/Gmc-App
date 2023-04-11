import React, { useEffect,useState } from 'react'

function RemainingTimeCounter() {
    const [state, setstate] = useState(180);
    useEffect(()=>{
    let i =setInterval(() => {
    setstate(e=>{
        if(e==0){
            return (0)
            clearInterval(i)
        }
        return (e-1)
    })
        return ( ()=>{
            clearInterval(i)

        })
    }, 1000);
    },[])
  return (
    <p className='text-center text-danger' >
            <small>
            Remaining time : { state} sec
              </small> </p>
  )
}

export default RemainingTimeCounter