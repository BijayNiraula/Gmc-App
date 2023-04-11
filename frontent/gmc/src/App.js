
import Login from "./Login/Login"
import AuthContext from "./Context/AuthContext";
import { memo } from "react";
import { useState } from "react";
import UserRoutes from "./User/UserRoutes"
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { useEffect } from "react";
import ForgotOrActivate from "./ForgotOrActivateAccount/ForgotOrActivate"
import Admin from "./Admin/Admin";
function App() {
 const [auth, setAuth] = useState({"auth":null,"role":null});
    
 useEffect(()=>{
  try{

  
       if( localStorage.getItem('auth')){
        var d=JSON.parse(localStorage.getItem('auth'))
         setAuth({auth:d.auth,role:d.role})
       }else{
        setAuth({auth:false,role:null})
       }
      }catch(e){
        localStorage.removeItem('auth')
        setAuth({auth:false,role:null})

      }
 },[])

  const login=(d)=>{
    setAuth({auth:d.auth,role:d.role})
  }
  const logout=()=>{
    setAuth({auth:false,"role":null})
  }


    if(!auth.auth){


      return (
        <AuthContext.Provider value={{"login":login,"logout":logout,"auth":auth}}>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="*" element={<Login/>}/>
        <Route path="/forgot" element={<ForgotOrActivate/>}/>
      </Routes>
      </BrowserRouter>
        </AuthContext.Provider>
     
        )
    }else{
        if(auth.role=="admin"){
          return(
            <AuthContext.Provider value={{"login":login,"logout":logout,"auth":auth.auth,"role":auth.role}}>
         
      <Admin/>
       
         </AuthContext.Provider>
          )

        }


       else{
        return (
          <AuthContext.Provider value={{"login":login,"logout":logout,"auth":auth.auth,"role":auth.role}}>
        <UserRoutes/>
     
        
          </AuthContext.Provider>
       
          )

       }

       

        }




      
}

export default memo(App)


