import Link from 'next/link';
import "../config/firebase";
import useAuth from "../hook/auth";
import style from "../styles/dash.module.css"
const Dash = () => {
    const { logout } = useAuth()
    return ( 
    <>

        <div className={style.nav}>
        <button className={style.button} onClick={logout}>Sign Out</button>
        </div>

    <div className={`${style.main_container} flex-class`}>
    <div className={style.form_container}>
    <h1 className={style.heading}>Test Number 1</h1><br></br>
    <h4 className={style.subheading}>Total Marks: 100</h4><br></br>
    <Link href='/no_test'><a> <button className={style.button}>Start Test</button></a></Link><br></br>
     </div>

     <div className={style.form_container}>
    <h1 className={style.heading}>Test Number 2</h1><br></br>
    <h4 className={style.subheading}>Total Marks: 100</h4><br></br>
    <Link href='/no_test'><a> <button className={style.button}>Start Test</button></a></Link><br></br>
     </div>

     <div className={style.form_container}>
    <h1 className={style.heading}>Test Number 3</h1><br></br>
    <h4 className={style.subheading}>Total Marks: 100</h4><br></br>
    <Link href='/no_test'><a> <button className={style.button}>Start Test</button></a></Link><br></br>
     </div>
    </div>

    <div className={`${style.main_container} flex-class`}>
    <div className={style.form_container}>
    <h1 className={style.heading}>Test Number 4</h1><br></br>
    <h4 className={style.subheading}>Total Marks: 100</h4><br></br>
    <Link href='/no_test'><a> <button className={style.button}>Start Test</button></a></Link><br></br>
     </div>

     <div className={style.form_container}>
    <h1 className={style.heading}>Test Number 5</h1><br></br>
    <h4 className={style.subheading}>Total Marks: 100</h4><br></br>
    <Link href='/no_test'><a> <button className={style.button}>Start Test</button></a></Link><br></br>
     </div>

     <div className={style.form_container}>
    <h1 className={style.heading}>Test Number 6</h1><br></br>
    <h4 className={style.subheading}>Total Marks: 100</h4><br></br>
    <Link href='/no_test'><a> <button className={style.button}>Start Test</button></a></Link><br></br>
     </div>
    </div>

    <div className={`${style.main_container} flex-class`}>
    <div className={style.form_container}>
    <h1 className={style.heading}>Test Number 7</h1><br></br>
    <h4 className={style.subheading}>Total Marks: 100</h4><br></br>
    <Link href='/no_test'><a> <button className={style.button}>Start Test</button></a></Link><br></br>
     </div>

     <div className={style.form_container}>
    <h1 className={style.heading}>Test Number 8</h1><br></br>
    <h4 className={style.subheading}>Total Marks: 100</h4><br></br>
    <Link href='/no_test'><a> <button className={style.button}>Start Test</button></a></Link><br></br>
     </div>

     <div className={style.form_container}>
    <h1 className={style.heading}>Test Number 9</h1><br></br>
    <h4 className={style.subheading}>Total Marks: 100</h4><br></br>
    <Link href='/no_test'><a> <button className={style.button}>Start Test</button></a></Link><br></br>
     </div>
    </div>
    
    </>
    );
}
 
export default Dash;