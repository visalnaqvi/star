import "../config/firebase";
import useAuth from "../hook/auth";
import style from "../styles/dash.module.css"


const NoTest = () => {
    const { logout } = useAuth()
    return ( <div className={`${style.main_container} flex-class`}>
    <div className={style.form_container}>
    <h1 className={style.heading}>Sorry This Test is Unavalaible Now</h1><br></br>
    <h4 className={style.subheading}>Please Try Again Later</h4><br></br>
     <button onClick={logout} className={style.button}>Sign Out</button><br></br>
     </div></div> )
}
 
export default NoTest;