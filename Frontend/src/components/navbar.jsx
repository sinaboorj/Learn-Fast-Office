import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHomeLgAlt } from "@fortawesome/free-solid-svg-icons";
import '../css/navbar.css'
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import logo from '/sysImage/Logo 2.png'
import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"
import { LanguageContext } from "../context/languageContext";
import Strings from "../helper/strings";

const Navbar = () => {
    const { hidden, userData, setUserData, setMessageStatus, setSchemaLoginError } = useContext(UserContext)
    const { lang, setLang } = useContext(LanguageContext)
    const nav = useNavigate();

    //************************************* show the First client's name in Navbar  ***************************** */
    var userStatus = false;
    var firstStrEmail = userData?.email?.charAt(0)
    //**************************************************************************************** */
   
    if (firstStrEmail !== undefined) {
        userStatus = true;
    } else { userStatus = false; }

    return (
        <>
            {!hidden && (
                <>
                    <div className="main-nav">

                        <div className="nav-left">
                            <Link to='/' className="nav-link ">
                                {userStatus
                                    ? <span className="user-info">{firstStrEmail}</span>
                                    : < img className="nav-logo" src={logo} width={30} height={30} alt="Logo"  onClick={()=>{nav('/api/')}}/>
                                }
                            </Link>
                            <Link to='/' className="nav-link" style={{ margin: ' 0 3px 0' }}><FontAwesomeIcon icon={faHomeLgAlt} className="home-icon" /></Link>
                        </div>

                        <div className="nav-center">
                            <Link to='/api/dashboard' className="nav-link">{Strings.Dashboard}</Link>
                            <Link to='/' className="nav-link">{Strings.Chart}</Link>
                            <Link to='/' className="nav-link" >{Strings.Planning}</Link>
                            <Link to='/' className="nav-link" > {Strings.Maintenance}</Link>
                            <Link to='/api/monitoring-analysis' className="nav-link"> {Strings.Statistics}</Link>

                        </div>

                        <div className="nav-right">
                            <Link to='/' className="nav-link cart-icon"><FontAwesomeIcon icon={faCartShopping} /></Link>
                            <div className="log-font">
                                {userStatus
                                    ? <Link to='/api/login' className="nav-link log-item" onClick={() => { setUserData({}); localStorage.clear(); setMessageStatus(false); setSchemaLoginError(false) }} style={{ color: 'rgb(255 39 39)', fontWeight: '500' }}>Exit</Link>
                                    : <Link to='/api/login' className="nav-link log-item" >Login</Link>
                                }
                            </div>

                            {lang
                                ? <img onClick={() => { setLang(!lang) }} src={faFlag} className="nav-link language" title="en/fa" alt="language" />
                                : <img onClick={() => { setLang(!lang) }} src={EnFlag} className="nav-link language" title="en/fa" alt="language" />
                            }
                        </div>

                    </div>
                    <br />  <br />
                </>
            )}
        </>
    );
}
 
export default Navbar;
