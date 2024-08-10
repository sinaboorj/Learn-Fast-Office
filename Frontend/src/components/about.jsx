
import '../sass/about.scss'
import sina from '../../public/sysImage/Sina.png'
import { useContext, useEffect } from 'react'
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';
import { FaSkype , FaEnvelope, FaLinkedin} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import InsigImage from '../public/insigImage';

const About = () => {
    const { lang } = useContext(PublicContext);

    useEffect(() => {
        window.scrollTo({
            top: 180,
            behavior: 'smooth' // باعث می‌شود که اسکرول به آرامی انجام شود  
        });
    }, [])


    return (
        <>
            <br />
            <div className="about">
                <img className="resume-pic" src={sina} alt="Sina picture profile" />
                <span className='resume'>Hossein Zarei (Sina)</span>
                <div className='resume-text-fa' style={{ direction: lang ? 'ltr' : 'rtl' }}>
                    <span>{Strings.Sina_1}</span>
                    <span>{Strings.Sina_2}</span>
                    <span>{Strings.Sina_3}</span>
                </div>

                {lang
                    ? <p className="about-description" style={{ direction: 'ltr' }}>
                        <li style={{listStyle:'none', marginBottom:'11px'}}>Design and development of the central planning website</li>
                    Currently, This web application project is being prepared, the progress of which can be seen step by step on my GitHub page at the following address. <br />
                    <span title='LinkedIn'><FaGithub className="home-icon" /> :  <a href="https://github.com/sinaboorj/Learn-Fast-Office"> GitHub </a></span><br />
                    This website is at the disposal of the central planning personnel of Iran National Steel Industrial Group (INSIG), which includes the following sections: <br />
                    <li> Personnel registration <span>&#9989;</span></li>
                    <li>Verification of personnel identity using email and personnel number <span>&#9989;</span></li>
                    <li>Show user profile (editing and completing work and educational information) <span>&#9989;</span></li>
                    <li>Showing the structure, performance, goals and tasks of the central planning department </li>
                    <li>Show the organizational chart and the people in the chart <span>&#9989;</span></li>
                    <li>Dashboard of production line performance reports </li>
                    <li>Display all types of charts related to production and program </li>
                    <li>Production growth report and implementation of production forecasting plan </li>
                    <li>Forecasting the production schedule for the next month and year </li>
                    <li>Forecasting raw materials and consumables needed for production </li>
                    <li>Display operational efficiency, production efficiency and production speed </li>
                    <li>Display performance reports of production lines and their performance records </li>
                    <li>Online calculation and display of production productivity bonus and overtime amount of the month </li>
                </p>
                :
                    <p className="about-description" style={{ direction: 'rtl' }} >
                        <li style={{listStyle:'none', marginBottom:'11px'}} >طراحی و توسعه وب سایت برنامه ریزی مرکزی</li>
                    در حال حاضر این پروژه کاربردی وب درحال آماده شدن است، که میتوان پیشرفت آن را گام به گام در صفحه GitHub به آدرس زیر مشاهده کرد.<br />
                    <span title='LinkedIn'><FaGithub className="home-icon" /> :  <a href="https://github.com/sinaboorj/Learn-Fast-Office"> GitHub </a></span><br />
                    این وب سایت در اختیار پرسنل برنامه ریزی مرکزی گروه ملی صنعتی فولاد ایران (INSIG) می باشد که شامل بخش های زیر می باشد:<br />
                    <li>ثبت نام پرسنل <span>&#9989;</span></li>
                    <li> تایید هویت پرسنل با استفاده از ایمیل و شماره پرسنلی <span>&#9989;</span></li>
                    <li>نمایش پروفایل کاربری (ویرایش و تکمیل اطلاعات کاری و آموزشی) <span>&#9989;</span></li>
                    <li>نمایش ساختار، عملکرد، اهداف و وظایف بخش برنامه ریزی مرکزی</li>
                    <li>نمایش نمودار سازمانی و افراد حاضر در نمودار چارت <span>&#9989;</span></li>
                    <li>داشبورد گزارشات عملکرد خطوط تولید</li>
                    <li>نمایش انواع نمودارهای مربوط به تولید و برنامه</li>
                    <li>گزارش رشد تولید و اجرای طرح تولید</li>
                    <li>پیش بینی برنامه تولید برای ماه و سال آینده</li>
                    <li>پیش بینی مواد اولیه و مواد مصرفی مورد نیاز برای تولید</li>
                    <li>نمایش راندمان عملیاتی، راندمان تولید و سرعت تولید</li>
                    <li>نمایش گزارش عملکرد خطوط تولید و سوابق عملکرد آنها</li>
                    <li>محاسبه و نمایش آنلاین پاداش بهره وری تولید و میزان اضافه کاری ماه</li>
                </p>
            }
                <div className="contact-about">
                    <h6 title='Email'> <FaEnvelope className="about-icon" /> Email : sina_boorj@yahoo.com</h6>
                    <h6 title='Skype'> <FaSkype className="about-icon" /> Skype : live:.cid.75d52dccd1467185</h6>
                    <h6 title='Linkedin'><FaLinkedin className="about-icon" /> Linkedn <a href="https://www.linkedin.com/in/hossein-zarei-462a8a215/"></a></h6>
                    <h6 title='Github'><FaGithub className="about-icon" /> GitHub <a href="https://github.com/sinaboorj/Learn-Fast-Office"> </a></h6>
                </div>

            </div>
            <br />
            <InsigImage />
        </>
    )
}

export default About