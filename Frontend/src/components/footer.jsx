import { useContext } from 'react';
import '../sass/footer.scss';
import {  FaMapPin, FaInfoCircle , FaEnvelope, FaInternetExplorer} from 'react-icons/fa';
import { UserContext } from '../context/userContext';
import blueLogo from '/sysImage/Logo.png'
import { Link } from 'react-router-dom';
import { PublicContext } from '../context/publicContext';

const Footer = () => {
    const { hidden } = useContext(UserContext)
    const { lang, setActiveLink } = useContext(PublicContext)
    return (
        <>
            {!hidden && (
                <>
                    <footer className="footer">
                        <div className="contact">
                            <span className="contact-us"> <FaMapPin className="footer-icon" /> : Ahvaz, Iran</span>
                            <Link className="contact-us" to='https://insig.org/'><FaInternetExplorer className="footer-icon" /> : www.insig.org </Link>
                            <Link onClick={() => { setActiveLink('') }} className="contact-us" to='/about-hossein-zarei'> <FaInfoCircle className="footer-icon" /> : About Programmer</Link>
                        </div>
                        <div className="left-footer">
                            {lang
                                ?
                                <>
                                    <img className="planning-pic" src={blueLogo} alt="planning-pic" />
                                    <span style={{ fontSize: '12px' }}>INSIG</span>
                                    <span style={{ fontSize: '12px' }}>Production planning and control</span>
                                    <span style={{ fontSize: '11px' }}>Statistics monitoring and analysis</span>
                                </>
                                :
                                <>
                                    <img className="planning-pic" src={blueLogo} alt="planning-pic" />
                                    <h5 style={{ fontSize: '12px', fontWeight: '700' }}>گروه ملی صنعتی فولاد ایران</h5>
                                    <span style={{ fontSize: '11px', fontFamily: 'IRANSanazWeb' }}>واحد پايش و تحليل آمار</span>
                                </>
                            }
                        </div>
                    </footer>
                </>
            )}
        </>
    );
}
 
export default Footer;