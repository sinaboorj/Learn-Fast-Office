
import '../sass/home.scss'
import { useContext } from "react";
import { PublicContext } from "../context/publicContext";
import logo from '/sysImage/Logo 2.png'
import { FaGithub } from 'react-icons/fa';
import InsigImage from '../public/insigImage';

const Home = () => {
    const { lang } = useContext(PublicContext)
    return (
        <>
            <div className="moveing-text">
                <img src={logo} width={50} height={50} alt="Logo" />
                <span className="home-text">{lang ? 'Iran National Steel Industrial Group' : 'گروه ملي صنعتي فولاد ايران'} </span>
            </div>
            <hr style={{ color: 'white', width: '95%', margin: 'auto' }} />
            {lang
                ? <p className="home-description" style={{ direction: 'ltr' }}>
                    Currently, This web application project is being prepared, the progress of which can be seen step by step on my GitHub page at the following address. <br />
                    <span title='LinkedIn'><FaGithub className="home-icon" /> :  <a href="https://github.com/sinaboorj/Learn-Fast-Office"> GitHub </a></span><br />

                    This website is at the disposal of the central planning personnel of Iran National Steel Industrial Group (INSIG), which includes the following sections: <br />
                    <li> Personnel registration <span>&#9989;</span></li>
                    <li>Verification of personnel identity using email and personnel number <span>&#9989;</span></li>
                    <li>Show user profile (editing and completing work and educational information) <span>&#9989;</span></li>
                    <li>Showing the structure, performance, goals and tasks of the central planning department </li>
                    <li>Show the organizational chart and the people in the chart <span>&#9989;</span></li>
                    <li>Production and program information dashboard </li>
                    <li>Display all types of charts related to production and program </li>
                    <li>Production growth report and implementation of production forecasting plan </li>
                    <li>Forecasting the production schedule for the next month and year </li>
                    <li>Forecasting raw materials and consumables needed for production </li>
                    <li>Display operational efficiency, production efficiency and production speed </li>
                    <li>Performance reports of production lines and their performance records </li>
                    <li>Online calculation and display of production productivity bonus and overtime amount of the month </li>
                </p>
                :
                <p className="home-description" style={{ direction: 'rtl' }} >
                    در حال حاضر این پروژه کاربردی وب درحال آماده شدن است، که میتوان پیشرفت آن را گام به گام در صفحه GitHub به آدرس زیر مشاهده کرد.<br />
                    <span title='LinkedIn'><FaGithub className="home-icon" /> :  <a href="https://github.com/sinaboorj/Learn-Fast-Office"> GitHub </a></span><br />
                    این وب سایت در اختیار پرسنل برنامه ریزی مرکزی گروه ملی صنعتی فولاد ایران (INSIG) می باشد که شامل بخش های زیر می باشد:<br />
                    <li>ثبت نام پرسنل <span>&#9989;</span></li>
                    <li> تایید هویت پرسنل با استفاده از ایمیل و شماره پرسنلی <span>&#9989;</span></li>
                    <li>نمایش پروفایل کاربری (ویرایش و تکمیل اطلاعات کاری و آموزشی) <span>&#9989;</span></li>
                    <li>نمایش ساختار، عملکرد، اهداف و وظایف بخش برنامه ریزی مرکزی</li>
                    <li>نمایش نمودار سازمانی و افراد حاضر در نمودار چارت <span>&#9989;</span></li>
                    <li>داشبورد اطلاعات تولید و برنامه</li>
                    <li>نمایش انواع نمودارهای مربوط به تولید و برنامه</li>
                    <li>گزارش رشد تولید و اجرای طرح تولید</li>
                    <li>پیش بینی برنامه تولید برای ماه و سال آینده</li>
                    <li>پیش بینی مواد اولیه و مواد مصرفی مورد نیاز برای تولید</li>
                    <li>نمایش راندمان عملیاتی، راندمان تولید و سرعت تولید</li>
                    <li>گزارش عملکرد خطوط تولید و سوابق عملکرد آنها</li>
                    <li>محاسبه و نمایش آنلاین پاداش بهره وری تولید و میزان اضافه کاری ماه</li>
                </p>
            }
           <InsigImage />
        </>
    );
}
 
export default Home;