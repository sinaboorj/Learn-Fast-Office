import { useContext } from 'react';
import '../sass/footer.scss';
import { FaSkype , FaEnvelope, FaMapPin, FaLinkedin, FaInfoCircle} from 'react-icons/fa';
import { UserContext } from '../context/userContext';
import darkLogo from '../../public/sysImage/darkLogo.jpg'
import INSIGmain1 from '../../public/sysImage/INSIGmain1.jpg'
import { Link } from 'react-router-dom';
import { PublicContext } from '../context/publicContext';

const Footer = () => {
    const { hidden } = useContext(UserContext)
    const { lang } = useContext(PublicContext)
    return (
        <>
            {!hidden && (
                <>
                    
                    <footer className="footer">
                        <div className="contact">
                            <span className="contact-us"> <FaEnvelope className="icon-color" /> : sina_boorj@yahoo.com</span>
                            <span className="contact-us"> <FaSkype className="icon-color" /> : live:.cid.75d52dccd1467185</span>
                            <span><a className="contact-us unlink-color unlink-decoration" href="https://www.linkedin.com/in/hossein-zarei-462a8a215/"><FaLinkedin className="icon-color" /> : Hossein Zarei</a></span>
                            <span className="contact-us"> <FaMapPin className="icon-color" /> : Iran.Ahvaz</span>
                            <Link className="contact-us about-sina" to='/api/about-hossein-zarei'> <FaInfoCircle className="icon-color" /> : About Programmer</Link>
                        </div>
                        <div className="left-footer">
                            {lang
                                ?
                                <>
                                    <img className="planning-pic" src={darkLogo} alt="planning-pic" />
                                    <h5>INSIG</h5>
                                    <span style={{ fontSize: '13px' }}>Production planning and control</span>
                                    <span style={{ fontSize: '13px' }}>Statistics monitoring and analysis</span>
                                </>
                                :
                                <>
                                    <img className="planning-pic" src={INSIGmain1} alt="planning-pic" style={{ width: '160px' }} />
                                    <span style={{ fontSize: '12px' }}>واحد پايش و تحليل آمار</span>
                                </>
                            }
                        </div>
                            
                    </footer>
                    <div className="under-footer" style={{ fontSize: '13px', color: '#383838', backgroundColor: 'white' }}>This page was programmed (Backend and Frontend) and designed by Hossein Zarei alias Sina in March 2024.</div>
                </>
            )}
        </>
    );
}
 
export default Footer;