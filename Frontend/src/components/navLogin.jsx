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
    const { lang, setLang, activeLink, setActiveLink } = useContext(PublicContext)
    const { exit } = navFunctions()
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
                    <Link to='/' className={`navlink ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { setActiveLink('home'); }} style={{ margin: ' 0 3px 0' }}>{Strings.Home}</Link>
                    <Link to='/dashboard' className={`navlink ${activeLink === 'dashboard' ? 'active' : ''}`} onClick={() => { setActiveLink('dashboard'); }}>{Strings.Dashboard}</Link>
                </ul>
                <ul ref={menuRef} className="nav-left">
                    <Link> <span onClick={() => { setIsOpen(!isOpen) }} className="user-login" >{firstStrEmail}</span></Link>
                    <button className="dropdown-toggle" onClick={() => { setIsOpen(!isOpen) }}> </button>
                    {isOpen && (
                        <ul className="subdropdown-menu">
                            <li className="subdropdown-item item-email" >{userData?.email}</li>
                            <Link to='/about-hossein-zarei'><li onClick={() => { setIsOpen(!isOpen); setActiveLink('') }} className="subdropdown-item view-profile">About Programmer</li></Link>
                            <li className="subdropdown-item" onClick={() => { setLang(!lang); setIsOpen(!isOpen) }} >
                                {lang
                                    ? <img src={faFlag} className="language" title="Change language" alt="language" />
                                    : <img src={EnFlag} className="language" title="Change language" alt="language" />
                                }
                            </li>
                            <span className="line-seperator" ></span>
                            <Link to='/login' className="subdropdown-item log-item" onClick={() => { exit(); setIsOpen(!isOpen); setActiveLink('login') }} style={{ color: 'rgb(255 39 39)', fontWeight: '500', marginLeft: '-4px' }}>Exit</Link>
                        </ul>
                    )}
                </ul>
            </nav>
        </>
    );
}
 
export default NavLogin;