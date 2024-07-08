import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeLgAlt , faUserCircle} from "@fortawesome/free-solid-svg-icons";
import '../sass/navbar.scss'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import logo from '/sysImage/Logo 2.png'
import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"
import Strings from "../helper/strings";
import { PublicContext } from "../context/publicContext";


const Navbar = () => {
    const { hidden, userData, setUserData, setMessageStatus, setSchemaLoginError } = useContext(UserContext)
    const { lang, setLang } = useContext(PublicContext)
    const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') ?? 'home'); //برای ثابت ماندن رنگ لینک انتخابی

    //************************************* show the First client's name in Navbar  ***************************** */
    var userStatus = false;
    var firstStrEmail = userData?.email?.charAt(0)
    //**************************************************************************************** */
    const exit = () => {
        setUserData({});
        localStorage.removeItem('userData');
        setMessageStatus(false);
        setSchemaLoginError(false)
    }

    const login = () => { //برای رفتن به لینک قبل از لاگین
        const url = window.location.href;
        localStorage.setItem('url', url)
    }

    useEffect(() => {
        if (activeLink !== undefined) {
            setActiveLink(localStorage.getItem('activeLink'))
        } else {
            setActiveLink('home')
        }
    }, [])
    
    useEffect(() => {
        if (activeLink !== undefined) localStorage.setItem('activeLink', activeLink)
    }, [activeLink])
    
    const handleLinkClick = (link) => {
        setActiveLink(link);
    }
    
    if (firstStrEmail !== undefined) {
        userStatus = true;
    } else { userStatus = false; }

    return (
        <>
            {!hidden && (
                <>
                    <header className="main-nav">
                        <nav className="nav-left">
                            {userStatus
                                ? <Link to={`/api/profile/userID:${userData?.userID}`}><span className="user-login" title={userData?.email}>{firstStrEmail}</span></Link>
                                : <Link to='/'> <img className="nav-logo" src={logo} width={30} height={30} alt="Logo"   onClick={() => handleLinkClick('home')}/></Link>
                            }
                            <Link to='/' className={`navlink ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')} style={{ margin: ' 0 3px 0' }}><FontAwesomeIcon icon={faHomeLgAlt} className="home-icon" /></Link>
                        </nav>

                        <nav className="nav-center">
                            <Link to='/api/dashboard' className={`navlink ${activeLink === 'dashboard' ? 'active' : ''}`} onClick={() => handleLinkClick('dashboard')}>{Strings.Dashboard}</Link>
                            <Link to='/' className={`navlink ${activeLink === 'chart' ? 'active' : ''}`} onClick={() => handleLinkClick('chart')}>{Strings.Chart}</Link>
                            <Link to='/' className={`navlink ${activeLink === 'planning' ? 'active' : ''}`} onClick={() => handleLinkClick('planning')}>{Strings.Planning}</Link>
                            <Link to='/' className={`navlink ${activeLink === 'maintenance' ? 'active' : ''}`} onClick={() => handleLinkClick('maintenance')}> {Strings.Maintenance}</Link>
                            <Link to='/api/statistics' className={`navlink ${activeLink === 'statistics' ? 'active' : ''}`} onClick={() => handleLinkClick('statistics')}> {Strings.Statistics}</Link>

                        </nav>

                        <nav className="nav-right">
                            {lang
                                ? <img onClick={() => { setLang(!lang) }} src={faFlag} className="navlink language" title="En/Fa language" alt="language" />
                                : <img onClick={() => { setLang(!lang) }} src={EnFlag} className="navlink language" title="En/Fa language" alt="language" />
                            }
                            <div>
                                {userStatus
                                    ? <Link to='/api/login' className="navlink log-item" onClick={() => { exit() }} style={{ color: 'rgb(255 39 39)', fontWeight: '500' }}>Exit</Link>
                                    : <Link to='/api/login' className="navlink log-item" onClick={() => { login() }} ><FontAwesomeIcon icon={faUserCircle} className={`login-icon ${activeLink === 'login' ? 'active' : ''}`} title="Login" onClick={() => handleLinkClick('login')} /></Link>
                                }
                            </div>
                        </nav>
                    </header>
                    <br />  <br />
                </>
            )}
        </>
    );
}
 
export default Navbar;
