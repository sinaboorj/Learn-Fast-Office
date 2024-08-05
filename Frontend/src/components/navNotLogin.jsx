import { useContext } from "react";
import { PublicContext } from "../context/publicContext";
import logo from '/sysImage/Logo 2.png'

import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"
import Strings from "../helper/strings";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

const NavNotLogin = () => {
    const { lang, setLang, activeLink, setActiveLink } = useContext(PublicContext)
    let url = window.location.href
    url = url.slice(0, url.indexOf('/api/'))

    const login = () => { //برای رفتن به لینک قبل از لاگین
        const url = window.location.href;
        if (url !== `${url}/api/login`) localStorage.setItem('previousURL', url)
    }
    const handleLinkClick = (link) => {
        setActiveLink(link);
    }
    
    return (
        <>
            <nav className="main-nav">
                <ul className="nav-left">
                    <Link to='/'> <img className="nav-logo" src={logo} width={30} height={30} alt="Logo" onClick={() => { handleLinkClick('home') }} /></Link>
                </ul>
                <ul className="nav-right">
                    <Link to='/' className={`navlink ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { handleLinkClick('home') }} style={{ margin: ' 0 3px 0' }}>{Strings.Home}</Link>
                    {/* <Link to='/api/dashboard' className={`navlink ${activeLink === 'dashboard' ? 'active' : ''}`} onClick={() => { handleLinkClick('dashboard') }}>{Strings.Dashboard}</Link>
                    <Link to='/api/chart' className={`navlink ${activeLink === 'sitemap' ? 'active' : ''}`} onClick={() => { handleLinkClick('sitemap') }}>{Strings.Chart}</Link>
                    <Link className={`navlink ${activeLink === 'sections' ? 'active' : ''}`} onClick={() => { handleLinkClick('sections') }}>{Strings.Sections} </Link> */}
                    {lang
                        ? <img style={{marginLeft:'10px'}} onClick={() => { setLang(!lang) }} src={faFlag} className="language" title="Change language" alt="language" />
                        : <img style={{marginLeft:'10px'}} onClick={() => { setLang(!lang) }} src={EnFlag} className="language" title="Change language" alt="language" />
                    }
                    <Link style={{marginLeft:'10px'}} to='/api/login' className="log-item" onClick={() => { login(); handleLinkClick('login') }} ><FontAwesomeIcon icon={faUserCircle} className={`login-icon ${activeLink === 'login' ? 'active' : ''}`} title="Login" /></Link>
                </ul>
            </nav>
        </>
    );
}
 
export default NavNotLogin;