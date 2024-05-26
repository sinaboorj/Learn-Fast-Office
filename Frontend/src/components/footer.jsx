import { useContext } from 'react';
import '../css/footer.css';
import { FaSkype , FaEnvelope, FaMapPin, FaLinkedin, FaInfoCircle} from 'react-icons/fa';
import { UserContext } from '../context/userContext';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faMapPin, faEnvelope ,faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import INSIGmain from '../../public/sysImage/INSIGmain.jpg'
import INSIG from '../../public/sysImage/INSIG.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const { hidden } = useContext(UserContext)
    return (
        <>
            {!hidden && (
                <>
                    <div className="footer">
             
                        <div className="contact">
                            <span className="contact-us"> <FaEnvelope style={{ color: '#0d6efd' }} /> : sina_boorj@yahoo.com</span>
                            <span className="contact-us"> <FaSkype style={{ color: '#0d6efd' }} /> : live:.cid.75d52dccd1467185</span>
                            <span><a className="contact-us unlink-color unlink-decoration" href="https://www.linkedin.com/in/hossein-zarei-462a8a215/"><FaLinkedin style={{ color: '#0d6efd' }} /> : Hossein Zarei</a></span>
                            <span className="contact-us"> <FaMapPin style={{ color: '#0d6efd' }} /> : Iran.Ahvaz</span>
                            <Link className="contact-us about-sina" to='/api/about-hossein-zarei'> <FaInfoCircle style={{ color: '#0464f5' }} /> : About Programmer & Designer</Link>
                        </div>
                        <div>
                            <img className="insig-footer" src={INSIG} width={100} height={100} alt="Logo" />
                        </div>
                            <img className="planning-pic" src={INSIGmain}  alt="planning-pic" />
                    </div>
                    <div className="under-footer" style={{ fontSize: '13px', color: '#383838', backgroundColor: 'white' }}>This page was programmed (Backend and Frontend) and designed by Hossein Zarei alias Sina in March 2024.</div>
                </>
            )}
        </>
    );
}
 
export default Footer;