
import '../css/about.css'
import resume from '/sysImage/Resume.jpg'
import sina from '/sysImage/Sina 1.png'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'




const About = () => {
    const { language } = useContext(UserContext)
    return (
        <>
            <br /><br /><br />
            <div className="about">
                <img className="sina-about" src={sina} alt="Sina picture profile" />
                <span className='sina'>Hossein Zarei (Sina)</span>
                {language
                    ? <p className='sina-text'>
                        I am a software engineer and I have been working as a programmer for about 15 years.
                        For the past 6 years, I have been responsible for the Frontend development and design of the website at INSIG steel company at Ahvaz,Iran.
                    </p>
                    : <p style={{ direction: 'rtl', fontFamily: 'system-ui' ,fontSize:'14px'}} className='sina-text'>
                        مهندس نرم افزار هستم و حدود 15 سال است که به عنوان برنامه نویس کار می کنم 
                        و در 6 سال گذشته مسئولیت توسعه و طراحی وب سایت شرکت فولاد INSIG در اهواز، ایران را بر عهده داشته ام.
                    </p>
                }
                <img className="resume" src={resume} alt="Sina resume" />
            </div>
        </>
    )
}

export default About