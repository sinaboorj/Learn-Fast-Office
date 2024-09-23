import { useContext } from "react";
import { PublicContext } from "../context/publicContext";
import logo from '/sysImage/INSIG_PNG.png'
import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"
import Strings from "../helper/strings";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";
import navFunctions from "../helper/navFunctions";

const NavNotLogin = () => {
    const { lang, setLang, activeLink } = useContext(PublicContext)
    const { handleLinkClick}=navFunctions()

    return (
        <>
            <nav className="main-nav-not-login">
                <ul className="nav-left">
                    <Link to='/login' className="log-item navlink" onClick={() => { handleLinkClick(activeLink === 'login' ? 'login' : 'Register') }} ><FontAwesomeIcon icon={faUserCircle} className={`login-icon ${activeLink === 'login' ? 'active' : ''}`} title="Login" /></Link>
                    {lang
                        ? <img onClick={() => { setLang(!lang) }} src={faFlag} className="language navlink" title="Change language" alt="language" />
                        : <img onClick={() => { setLang(!lang) }} src={EnFlag} className="language navlink" title="Change language" alt="language" />
                    }
                    <Link to='/' className={`navlink ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { handleLinkClick('home') }} style={{ margin: ' 0 3px 0' }}>{Strings.Home}</Link>
                </ul>
                <div className="moveing-text">
                    <span className="home-text1">{lang ? 'I N S I G' : 'گروه ملي صنعتي فولاد ايران'} </span>
                    <img src={logo} width={28} height={28} alt="Logo" />
                </div>
            </nav>
        </>
    );
}
 
export default NavNotLogin;