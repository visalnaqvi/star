import { useEffect } from "react";
import app from "../config/firebase";
import useAuth from "./auth";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const AuthStateChanged = ({children}) => {

    const {setUser}= useAuth();
    const [loading , setLoading ] = useState(true); 
    useEffect(()=>{
        const auth = getAuth(app);
        onAuthStateChanged(auth,user =>{
            setUser(user);
            setLoading(false);
    })
    },[])

    if(loading){
         return <h1>Loading..</h1>
    }
    return children;
}
 
export default AuthStateChanged;