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

const DropDownMenuLogin = (props) => {
    const { userData, setUserData, setMessageStatus, setSchemaLoginError, fetchData } = useContext(UserContext)
    const { lang, setLang, setActiveLink } = useContext(PublicContext)
    const [open, setOpen] = useState(false)
    const menuRef = useRef()
    const firstStrEmail = props.data;

    const exit = () => {
        setUserData({});
        localStorage.removeItem('userData');
        setMessageStatus(false);
        setSchemaLoginError(false)
    }

    const handleLinkClick = (link) => {
        setActiveLink(link);
    }

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
                <div className='bars' onClick={() => { setOpen(!open) }}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                <div className='user-title' >
                    <Link to={`/api/user/${userData?.userID}`}><span onClick={() => { fetchData(); handleLinkClick(`user/${userData?.userID}`) }} className="dropDown-login" title={userData?.email}>{firstStrEmail}</span></Link>
                </div>
                </div>

            </div>

            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                <div onClick={() => { setOpen(!open) }}>
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
                    <Link to='/api/login' className="navlink log-item" onClick={() => { exit(); handleLinkClick('login') }} style={{ color: 'rgb(255 39 39)', fontWeight: '500' }}>Exit</Link>
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
 
export default DropDownMenuLogin;


