import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import '../css/navbar.css'
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import logo from '/sysImage/Logo.png'
import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"

const Navbar = () => {
    const { hidden, userData, setUserData, setMessageStatus, setSchemaLoginError, language, setLanguage } = useContext(UserContext)

    var userStatus = false;
    var firstStrEmail = userData?.email?.charAt(0)
   
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
                                    : < img className="nav-logo" src={logo} width={30} height={30} alt="Logo" />
                                }
                            </Link>
                            <Link to='/' className="nav-link">Learn Fast</Link>
                        </div>

                        <div className="nav-center">
                            <Link to='/api/dashboard' className="nav-link">{language ? 'Dashboard' : 'داشبورد'}</Link>
                            <Link to='/api/products' className="nav-link" >{language ? 'Products' : 'محصولات'}</Link>
                            <Link to='/api/appointment' className="nav-link" > {language ? 'Appointment' : 'وقت ملاقات'}</Link>
                            <Link to='/api/about' className="nav-link" title="درباره من"> {language ? 'About' : 'درباره من'}</Link>
                        </div>

                        <div className="nav-right">
                            <Link to='/api/cart' className="nav-link cart-icon"><FontAwesomeIcon icon={faCartShopping} title={language ? 'Cart' : 'سبد خريد'} /></Link>
                            <div className="log-font">
                                {userStatus
                                    ? <Link to='/api/login' className="nav-link log-item" onClick={() => { setUserData({}); localStorage.clear(); setMessageStatus(false); setSchemaLoginError(false) }} style={{color:'#df0b0b', fontWeight:'500'}}>Exit</Link>
                                    : <Link to='/api/login' className="nav-link log-item" style={{color:'#0fc30f'}}>Login</Link>
                                }
                            </div>

                            {language
                                ? <img onClick={() => { setLanguage(!language) }} src={EnFlag} className="nav-link language" title="Change language" alt="language" />
                                : <img onClick={() => { setLanguage(!language) }} src={faFlag} className="nav-link language" title="Change language" alt="language" />
                            }
                        </div>

                    </div>
                </>
            )}
            
        </>
    );
}
 
export default Navbar;
