import styles from "../styles/login.module.css"
import "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hook/auth";
import { withPublic } from "../hook/route";
    const authf = getAuth();
    

function SignUp() {
   const {user , signUp} = useAuth();
    // const router = useRouter();
    // const register = () => {
    //     signInWithEmailAndPassword(auth, email, pass)
    //     .then((userCredential) => {
    //       // Signed in 
    //       const user = userCredential.user;
    //       router.push('./firebase.js')
    //       console.log("user")
    //       console.log(user);
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //     });
    //   };
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
   
    return ( <div className={`${styles.main_container} flex-class`}>
        <div className={styles.form_container}>
            
               <h1>Add New Student</h1>
                <input id="email" value={email}
          onChange={(e) => setEmail(e.target.value)}  required name="email" className={styles.input_field} placeholder="Email" type="email"></input><br></br>
                <input id="pass" required name="pass" value={pass}
          onChange={(e) => setPassword(e.target.value)} className={styles.input_field} placeholder="Password" type="password"></input><br></br>
                <button onClick={()=>{signUp(authf,email,pass)}} className={styles.submit_btn}>Submit</button><br></br>
                
           
        </div>
    </div> );
}
 
export default SignUp;