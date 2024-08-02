import { Outlet, Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown , faUserCircle} from "@fortawesome/free-solid-svg-icons";
import '../sass/navbar.scss'
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import logo from '/sysImage/Logo 2.png'
import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"
import Strings from "../helper/strings";
import { PublicContext } from "../context/publicContext";
import NavSection from "./navSections";

const Navbar = () => {
    const { hidden, userData, setUserData, setMessageStatus, setSchemaLoginError, fetchData } = useContext(UserContext)
    const { lang, setLang, activeLink, setActiveLink, navSection, setNavSection } = useContext(PublicContext)
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef()
    //************************************* show the First client's name in Navbar  ***************************** */
    var userStatus = false;
    var firstStrEmail = userData?.email?.charAt(0)
    //**************************************************************************************** */
   
    let url = window.location.href
    url = url.slice(0, url.indexOf('/api/'))

    const exit = () => {
        setUserData({});
        localStorage.removeItem('userData');
        setMessageStatus(false);
        setSchemaLoginError(false)
    }

    const login = () => { //برای رفتن به لینک قبل از لاگین
        const url = window.location.href;
        if (url !== `${url}/api/login`) localStorage.setItem('previousURL', url)
    }

    const handleLinkClick = (link) => {
        setActiveLink(link);
    }
   
    if (firstStrEmail !== undefined) {
        userStatus = true;
    } else { userStatus = false; }

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => { document.removeEventListener('mousedown', handler) }
    }, [])

    return (
        <>
            {!hidden && (
                <>
                    <nav className="main-nav">
                        <ul className="nav-left">
                            {userStatus
                                ? <Link to={`/api/user/${userData?.userID}`}><span onClick={() => { fetchData(); setNavSection(false); handleLinkClick(`user/${userData?.userID}`) }} className="user-login" >{firstStrEmail}</span></Link>
                                : <Link to='/'> <img className="nav-logo" src={logo} width={30} height={30} alt="Logo" onClick={() => { handleLinkClick('home'); setNavSection(false) }} /></Link>
                            }
                           
                            <button className="dropdown-toggle" onClick={() => { setIsOpen(!isOpen) }}> </button>
                            {isOpen && (
                                <ul className="subdropdown-menu">
                                    <li className="subdropdown-item" style={{ fontSize: '13px' }}>{userData?.email}</li>
                                    <li className="subdropdown-item" >
                                        {lang
                                            ? <img onClick={() => { setLang(!lang) }} src={faFlag} className="language" title="Change language" alt="language" />
                                            : <img onClick={() => { setLang(!lang) }} src={EnFlag} className="language" title="Change language" alt="language" />
                                        }
                                    </li>
                                    <li className="subdropdown-item" style={{borderBottom:'solid #404040 1px'}}></li>
                                    <li className="subdropdown-item">
                                        {userStatus
                                            ? <Link to='/api/login' className="log-item" onClick={() => { exit(); setNavSection(false); handleLinkClick('login') }} style={{ color: 'rgb(255 39 39)', fontWeight: '500', marginLeft:'-4px' }}>Exit</Link>
                                            : <Link to='/api/login' className="log-item" onClick={() => { login(); setNavSection(false); handleLinkClick('login') }} ><FontAwesomeIcon icon={faUserCircle} className={`login-icon ${activeLink === 'login' ? 'active' : ''}`} title="Login" /></Link>
                                        }
                                    </li>
                                </ul>
                            )}
                        </ul>

                        <ul className="nav-center">
                            <Link to='/' className={`navlink ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { handleLinkClick('home'); setNavSection(false) }} style={{ margin: ' 0 3px 0' }}>Home</Link>
                            <Link to='/api/dashboard' className={`navlink ${activeLink === 'dashboard' ? 'active' : ''}`} onClick={() => { handleLinkClick('dashboard'); setNavSection(false) }}>{Strings.Dashboard}</Link>
                            <Link to='/api/chart' className={`navlink ${activeLink === 'sitemap' ? 'active' : ''}`} onClick={() => { handleLinkClick('sitemap'); setNavSection(false) }}>{Strings.Chart}</Link>
                            <Link className={`navlink ${activeLink === 'sections' ? 'active' : ''}`} onClick={() => { handleLinkClick('sections'); setNavSection(!navSection) }}>{Strings.Sections} </Link>
                        </ul>
                    </nav>
                    <Outlet />
                    <br />  <br />
                </>
            )}
            {navSection && <NavSection />}
        </>
    );
}
 
export default Navbar;
