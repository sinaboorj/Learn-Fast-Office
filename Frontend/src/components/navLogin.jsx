import Strings from "../helper/strings";
import { Link} from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"
import { PublicContext } from "../context/publicContext";
import navFunctions from "../helper/navFunctions";
import logo from '/sysImage/INSIG_PNG.png'

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
                    <Link to='/dashboard' className={`navlink ${activeLink === 'dashboard' ? 'active' : ''}`} onClick={() => { setActiveLink('dashboard'); }}>{Strings.Dashboard}</Link>
                    <Link to='/targets' className={`navlink ${activeLink === 'targets' ? 'active' : ''}`} onClick={() => { setActiveLink('targets'); }}>{Strings.Target_title}</Link>
                </ul>
                <div className="moveing-text">
                    <span className="home-text1">{lang ? 'I N S I G' : 'گروه ملي صنعتي فولاد ايران'} </span>
                    <img src={logo} width={28} height={28} alt="Logo" />
                </div>
                <ul ref={menuRef} className="nav-left">
                    {lang
                        ? <img onClick={() => { setLang(!lang) }} src={faFlag} className="language" title="Change language" alt="language" />
                        : <img onClick={() => { setLang(!lang) }} src={EnFlag} className="language" title="Change language" alt="language" />
                    }
                    <Link> <span onClick={() => { setIsOpen(!isOpen) }} className="user-login" >{firstStrEmail}</span></Link>
                    <button className="dropdown-toggle" onClick={() => { setIsOpen(!isOpen) }}> </button>
                    {isOpen && (
                        <ul className="subdropdown-menu">
                            <li className="subdropdown-item item-email" >{userData?.email}</li>

                            <span className="line-seperator" ></span>
                            <Link to='/login' className="subdropdown-item log-item" onClick={() => { exit(); setIsOpen(!isOpen); setActiveLink('login') }}>Exit</Link>
                        </ul>
                    )}
                </ul>
            </nav>
        </>
    );
}
 
export default NavLogin;