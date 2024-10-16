import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import '../sass/dropDownMenu.scss'
import { useContext, useEffect, useRef, useState } from 'react';
import { PublicContext } from '../context/publicContext';
import { UserContext } from '../context/userContext';
import EnFlag from "/sysImage/Englan.png"
import faFlag from "/sysImage/Iran.png"
import Strings from "../helper/strings";
import navFunctions from '../helper/navFunctions';
import logo from '/sysImage/INSIG_PNG.png'

const DropDownMenuLogin = (props) => {
    const { userData } = useContext(UserContext)
    const { lang, setLang } = useContext(PublicContext)
    const { exit, handleLinkClick } = navFunctions()
    const [open, setOpen] = useState(false)
    const menuRef = useRef()
    const firstStrEmail = props.data;

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
            <div className='menu-container'>
                <div className='bars' onClick={() => { setOpen(!open) }}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className='user-title' >
                        <span className="dropDown-login" title={userData?.email}>{firstStrEmail}</span>
                    </div>
                </div>
                <img src={logo} width={28} height={28} alt="Logo" style={{marginRight:'5px'}} />
            </div>

            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} ref={menuRef} >
                <ul onClick={() => { setOpen(!open) }}>
                    <li className='user-email'>{userData?.email}</li>
                    <Link to='/dashboard'> <DropDownItem icon={faThLarge} text={Strings.Dashboard} /> </Link>
                    <li className="subdropdown-item" onClick={() => { setLang(!lang) }} style={{padding:'0'}} >
                        {lang
                            ? <img src={faFlag} className="navlink language-down" title="En/Fa language" alt="language" />
                            : <img src={EnFlag} className="navlink language-down" title="En/Fa language" alt="language" />
                        }
                    </li>
                    <hr />
                    <Link to='/login' className="navlink exit" onClick={() => { handleLinkClick('login'); exit() }} >Exit</Link>
                </ul>
            </div>
        </>
    );
    function DropDownItem(props) {//for Icons
        return (
            <li className='item'>
                <FontAwesomeIcon style={{  marginRight: '6px' }} icon={props.icon}></FontAwesomeIcon>
                <span>{props.text}</span>
            </li>
        )
    }
}
 
export default DropDownMenuLogin;


