
import '../sass/about.scss'
import sina from '/sysImage/Sina.png'
import { useContext, useEffect } from 'react'
import {  FaSkype, FaLinkedin , FaEnvelope, FaGithub} from 'react-icons/fa';
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';
import { Link } from 'react-router-dom';
import Home from '../pages/home';

const About = () => {
    const { lang } = useContext(PublicContext);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])


    return (
        <>
            <br />
            <div className="about-sina">
                <img className="resume-pic" src={sina} alt="Sina picture profile" />
                <span className='resume'>Hossein Zarei (Sina)</span>
                <div className='resume-text-fa' style={{ direction: lang ? 'ltr' : 'rtl' }}>
                    <span>{Strings.Sina_1}</span>
                    <span>{Strings.Sina_2}</span>
                    <span>{Strings.Sina_3}</span>
                </div>
                <div style={{width:'100%', fontWeight:'700', fontSize:'13px' }}> SKILLS:</div>
                <div className='skills'>
                    <ul>
                        <li className='skill'> Programming</li>
                        <li className='skill'> React, JavaScript, CSS, HTML</li>
                        <li className='skill'> MySQL, SQL Server</li>
                        <li className='skill'> GitHub</li>
                        <li className='skill'> ui/ux, Figma</li>
                    </ul>
                    <ul>
                        <li className='skill' > Node.js</li>
                        <li className='skill'> Frontend Design</li>
                        <li className='skill'> Excel</li>
                        <li className='skill'> English language Conversation</li>
                    </ul>
                </div>
                <br />
                <div className="contact-about">
                    <span title='Email'> <FaEnvelope className="about-icon" /> Email : sina_boorj@yahoo.com</span>
                    <span title='Skype'> <FaSkype className="about-icon" /> Skype : live:.cid.75d52dccd1467185</span>
                    <Link title='Linkedin' to='https://www.linkedin.com/in/hossein-zarei-462a8a215/' ><FaLinkedin className="about-icon" /> Linkedn </Link>
                    <Link title='Github' to='https://github.com/sinaboorj/Learn-Fast-Office'><FaGithub className="about-icon" /> GitHub </Link>
                </div>
             
                <hr />
                <br />
            </div>
            <br />
            <Home />
        </>
    )
}

export default About