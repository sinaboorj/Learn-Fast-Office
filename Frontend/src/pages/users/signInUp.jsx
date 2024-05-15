import "../../css/signInUp.css";
import Login from "./login";
import Register from "./register";
import { UserContext } from "../../context/userContext";
import { useContext, useEffect } from "react";
import Home from "../home";

//signIn
const SignInUp = () => {
    const { login, setLogin, Msg, messageStatus, setMessageStatus, setHidden } = useContext(UserContext)

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
                            <span className="sign" style={{ borderBottom: login ? 'solid 2px #ffd461' : 'solid 2px #262626', color: login ? '#ffd461' : 'rgb(203 203 203)' }} onClick={() => { setLogin(true); setMessageStatus(false) }}>Login</span>
                            <span className="sign" style={{ borderBottom: login ? 'solid 2px #262626' : 'solid 2px #ffd461', color: login ? 'rgb(203 203 203)' : '#ffd461' }} onClick={() => { setLogin(false); setMessageStatus(false) }}>Register</span>
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
