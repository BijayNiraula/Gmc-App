import { createContext } from "react";

const AuthContext=createContext({
    auth:false,
    login:()=>{},
    logout:()=>{}
})
export default AuthContext