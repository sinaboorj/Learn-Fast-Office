import Strings from "../helper/strings";
import { Link} from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"
import { PublicContext } from "../context/publicContext";
import navFunctions from "../helper/navFunctions";

const NavLogin = (props) => {
    const { userData } = useContext(UserContext)
    const { lang, setLang, activeLink } = useContext(PublicContext)
    const { exit, handleLinkClick } = navFunctions()
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef()
    const firstStrEmail = props.data;
    
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
            <nav className="main-nav">
                <ul className="nav-center">
                    <Link to='/' className={`navlink ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { handleLinkClick('home'); }} style={{ margin: ' 0 3px 0' }}>{Strings.Home}</Link>
                    <Link to='/api/dashboard' className={`navlink ${activeLink === 'dashboard' ? 'active' : ''}`} onClick={() => { handleLinkClick('dashboard'); }}>{Strings.Dashboard}</Link>
                </ul>
                <ul ref={menuRef} className="nav-left">
                    <Link> <span onClick={() => { setIsOpen(!isOpen) }} className="user-login" >{firstStrEmail}</span></Link>
                    <button className="dropdown-toggle" onClick={() => { setIsOpen(!isOpen) }}> </button>
                    {isOpen && (
                        <ul className="subdropdown-menu">
                            <li className="subdropdown-item item-email" >{userData?.email}</li>
                            <Link to='/api/about-hossein-zarei'><li onClick={() => { setIsOpen(!isOpen); handleLinkClick('')  }} className="subdropdown-item view-profile">About Programmer</li></Link>
                            <li className="subdropdown-item" onClick={() => { setLang(!lang); setIsOpen(!isOpen) }} >
                                {lang
                                    ? <img src={faFlag} className="language" title="Change language" alt="language" />
                                    : <img src={EnFlag} className="language" title="Change language" alt="language" />
                                }
                            </li>
                            <span className="line-seperator" ></span>
                            <li className="subdropdown-item" onClick={() => {; setIsOpen(!isOpen); handleLinkClick('login'); exit(); }}>
                                <Link to='/api/login' className="log-item" style={{ color: 'rgb(255 39 39)', fontWeight: '500', marginLeft: '-4px' }}>Exit</Link>
                            </li>
                        </ul>
                    )}
                </ul>
            </nav>
        </>
    );
}
 
export default NavLogin;