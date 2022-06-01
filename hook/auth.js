import { async } from "@firebase/util";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthService } from "../service/AuthService";
import { useRouter } from "next/router";

const authContext = createContext();
export default function useAuth(){
    return useContext(authContext);
}
export function AuthProvider(props){
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [error, setError] = useState();

    const loginWithEmail = async (auth,email,pass) =>{
        const {error , user} = await AuthService.login(auth,email,pass);
        setUser(user ?? null)
        setError(error ?? "")
        if(user) router.replace('/dash');
    }

    const signUp = async (auth,email,pass) =>{
        console.log("kk")
        const {error , user} = await AuthService.signup(auth,email,pass);
        setUser(user ?? null)
        setError(error ?? "")
        console.log(error)
        if(user) router.replace('/dash');
    }

    const logout = async ()=>{
        await AuthService.logout();
       
        setUser(null);
        router.replace('/');

    }

    const value = {user,error,signUp,loginWithEmail, logout ,setUser}

    return <authContext.Provider value={value} {...props}/>
}