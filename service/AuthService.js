import { async } from "@firebase/util";
import app from "../config/firebase"

import { getAuth, signOut , signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
let user;

export const AuthService = {
   
    login : async (auth, email, pass)=> {
    try{
        await signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            user = userCredential.user;
        })
        return {
            error:"",
         user: user,
        
     };
    } catch (error)  {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        
            error :errorMessage,
            user:null,
      }
    };
  },

  signup : async (auth, email, pass)=> {
    try{
        await createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            user = userCredential.user;
        })
        return {
            error:"",
         user: user,
        
     };
    } catch (error)  {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        
            error :errorMessage,
            user:null,
      }
    };
  },


  logout : async () =>{
    const auth = getAuth(app);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }
}