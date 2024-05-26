import "../../css/signInUp.css";
import Login from "./login";
import Register from "./register";
import { UserContext } from "../../context/userContext";
import { useContext, useEffect } from "react";
import Home from "../home";
import { LanguageContext } from "../../context/languageContext";

//signIn
const SignInUp = () => {
    const { login, setLogin, Msg, messageStatus, setMessageStatus, setHidden } = useContext(UserContext)
    const { language } = useContext(LanguageContext);
    useEffect(() => {
        setLogin(true)
        setHidden(false)
    }, [])

    return (
        <>
            <br />
            <div className="login-container">
                <div className="sign-form-container">
                    <div className="sign-form">
                        <div className="user-sign">
                            <span className="sign" style={{ borderBottom: login ? 'solid 2px #044ef5' : 'solid 2px #363636', color: login ? '#044ef5' : 'rgb(203 203 203)' }} onClick={() => { setLogin(true); setMessageStatus(false) }}> {language ? 'Login' : 'ورود'}</span>
                            <span className="sign" style={{ borderBottom: login ? 'solid 2px #363636' : 'solid 2px #044ef5', color: login ? 'rgb(203 203 203)' : '#044ef5' }} onClick={() => { setLogin(false); setMessageStatus(false) }}> {language ? 'Register' : 'ثبت نام'}</span>
                        </div>
                        {login ? <Login /> : <Register />}
                    </div>
                </div>
                {/* *********************************** Add User Msg ********************************  */}
                {messageStatus && (
                    <div className="user-add-msg" style={{ backgroundColor: Msg.status ? "rgb(16, 189, 27)" : "rgb(238, 44, 44)" }}>
                        <span>{Msg.msg}</span>
                    </div>
                )}
            </div>
           <Home />
        </>
    );
}

export default SignInUp
