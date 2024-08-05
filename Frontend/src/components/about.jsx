
import '../sass/about.scss'
import sina from '../../public/sysImage/Sina.png'
import { useContext } from 'react'
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';
import { FaSkype , FaEnvelope, FaMapPin, FaLinkedin, FaInfoCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    const { lang } = useContext(PublicContext);
    return (
        <>
            <br /><br /><br />
            <div className="about">
                <img className="resume-pic" src={sina} alt="Sina picture profile" />
                <span className='resume'>Hossein Zarei (Sina)</span>
                <div className='resume-text-fa' style={{ direction: lang ? 'ltr' : 'rtl' }}>
                    <span>{Strings.Sina_1}</span>
                    <span>{Strings.Sina_2}</span>
                    <span>{Strings.Sina_3}</span>
                </div>
                <div className="contact-about">
                    <h6 title='Email'> <FaEnvelope className="about-icon-color"  /> : sina_boorj@yahoo.com</h6>
                    <h6 title='Skype'> <FaSkype className="about-icon-color"  /> : live:.cid.75d52dccd1467185</h6>
                    <h6 title='LinkedIn'><a className="contact-us unlink-color unlink-decoration" href="https://www.linkedin.com/in/hossein-zarei-462a8a215/"><FaLinkedin className="about-icon-color" /> : Hossein Zarei</a></h6>
                </div>
            </div>
        </>
    )
}

export default About