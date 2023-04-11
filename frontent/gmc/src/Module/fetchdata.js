

const fetchdata=async(body,url)=>{
    try{
      var token=''
       if(localStorage.getItem('auth')){
         token=JSON.parse(localStorage.getItem('auth')).token
       }
    
      const res=  await fetch(url,{
        
          method:"POST",
          body:body,
          headers:{
            'Content-Type':'application/json',
            'auth':token
          }
        })
        const data= await res.json();
       return data;
      }
  catch(e){
  console.log(e)
  return {"error":"Could not connect to server "}
  }
  
  }
  
  export default fetchdata