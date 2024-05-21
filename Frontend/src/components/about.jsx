
import '../css/about.css'
import sina from '../../public/sysImage/Sina.png'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

const About = () => {
    const { language } = useContext(UserContext)
    return (
        <>
            <br /><br /><br />
            <div className="about">
                
                    <img className="resume-pic" src={sina} alt="Sina picture profile" />
               
                <span className='resume'>Hossein Zarei (Sina)</span>
                {language
                    ? (
                        <div className='resume-text-en'>
                            <span > I am a software engineer and I have been working as a programmer in the central planning department of INSIG Steel Company in Ahvaz, Iran for about 15 years. </span>
                            <span >My main interest and expertise is web design and programming. </span>
                            <span>All parts of this site (Database, Frontend and Backend) have been designed, programmed and implemented by myself. </span>
                        </div>
                    )
                    : (
                        <div className='resume-text-fa'>
                            <span>
                            مهندس نرم افزار هستم و حدود 15 سال است که به عنوان برنامه نویس در بخش برنامه ريزي مركزي شرکت فولاد INSIG در اهواز، ایران كار ميكنم. </span>
                            <span>علاقه و تخصص اصلي من طراحي و برنامه نويسي وب ميباشد. </span>
                            <span>تمامي بخش هاي اين سايت (Database  وFrontend و Backend )  توسط خودم طراحي، برنامه نويسي و پياده سازي شده است. </span>
                        </div>
                    )
                }
               
            </div>
        </>
    )
}

export default About