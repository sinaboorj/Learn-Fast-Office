import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faP } from '@fortawesome/free-solid-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../sass/dropDownMenu.scss'
import { useContext, useEffect, useRef, useState } from 'react';
import { PublicContext } from '../context/publicContext';
import { UserContext } from '../context/userContext';
import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"
import Strings from "../helper/strings";
import logo from '/sysImage/Logo 2.png'

const DropDownMenu = () => {
    const { hidden, userData, setUserData, setMessageStatus, setSchemaLoginError, fetchData } = useContext(UserContext)
    const { lang, setLang, activeLink, setActiveLink } = useContext(PublicContext)
    const [open, setOpen] = useState(false)
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
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => { document.removeEventListener('mousedown', handler) }
    }, [])
    

    return (
        <>
            <div className='menu-container' ref={menuRef}>
                <div className='linebar-title'>
                    <div className='bars' onClick={() => { setOpen(!open) }}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', color: 'white' }}>
                        {userStatus
                            ? <Link to={`/api/user/${userData?.userID}`}><span onClick={() => { fetchData(); handleLinkClick(`user/${userData?.userID}`) }} className="dropDown-login" title={userData?.email}>{firstStrEmail}</span></Link>
                            : <Link to='/'> <img className="nav-logo" src={logo} width={30} height={30} alt="Logo" onClick={() => handleLinkClick('home')} /></Link>
                        }
                    </div>
                </div>
                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                    <ul onClick={() => { setOpen(!open) }}>
                        <Link to='/'><DropDownItem icon={faHouse} text={Strings.Home} /></Link>
                        <Link to='/api/dashboard'> <DropDownItem icon={faThLarge} text={Strings.Dashboard} /> </Link>
                        <Link to='/api/chart'><DropDownItem icon={faSitemap} text={Strings.Chart} /></Link>
                        <Link to='/api/planning'><DropDownItem icon={faP} text={Strings.Planning} /></Link>
                        <Link to='/api/maintenance'><DropDownItem icon={faM} text={Strings.Maintenance} /></Link>
                        <Link to='/api/statistics'><DropDownItem icon={faS} text={Strings.Statistics} /></Link>
                        {lang
                            ? <img onClick={() => { setLang(!lang) }} src={faFlag} className="navlink language" title="En/Fa language" alt="language" />
                            : <img onClick={() => { setLang(!lang) }} src={EnFlag} className="navlink language" title="En/Fa language" alt="language" />
                        }
                        
                        {userStatus
                            ? <>
                                <h6></h6>
                                <Link to='/api/login' className="navlink log-item" onClick={() => { exit(); handleLinkClick('login') }} style={{ color: 'rgb(255 39 39)', fontWeight: '500' }}>Exit</Link>
                            </>
                            : <Link to='/api/login' className="navlink log-item" onClick={() => { login(); handleLinkClick('login') }}><DropDownItem icon={faSignIn} text='Login' /></Link>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
    function DropDownItem(props) {
        return (
            <li className='item'>
                <FontAwesomeIcon style={{ color: 'white', marginRight: '6px' }} icon={props.icon}></FontAwesomeIcon>
                <span>{props.text}</span>
            </li>
        )
    }
}
 
export default DropDownMenu;


