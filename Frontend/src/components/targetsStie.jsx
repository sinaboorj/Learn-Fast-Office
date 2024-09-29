import { useContext } from 'react'
import { PublicContext } from '../context/publicContext';
import Strings from '../helper/strings';
import '../sass/targetsSite.scss'
import Home from '../pages/home';

const TargetsSite = () => {
    const { lang } = useContext(PublicContext);
         
    return (
        <>
            <div className='gole-countaner' >
                <div className='goal' >{Strings.Target_title}</div>
                <div className="targets">
                    {lang
                        ?
                        <div class="container" style={{ direction: lang ? 'ltr' : 'rtl' }}>
                            <ul class="item-list">
                                <li><span class="target-title">Creating dashboard reports:</span> designing, processing and modeling data.</li>
                                <li><span class="target-title">Regular reporting:</span> Preparation of daily, monthly and annual performance reports through the web platform.</li>
                                <li><span class="target-title">Production Forecast:</span> Predicting and creating the next month's production plan intelligently based on the needs of the sales unit.</li>
                                <li><span class="target-title">Management of raw materials:</span> Predicting the amount of raw materials and consumables needed for the production process.</li>
                                <li><span class="target-title">Efficiency analysis:</span> Display and analysis of operational efficiency, production efficiency and production speed.</li>
                                <li><span class="target-title">Production line performance report:</span> Providing comprehensive reports on the performance of production lines and their records.</li>
                                <li><span class="target-title">Calculation of productivity bonus:</span> Online display of production productivity bonus and monthly overtime amount.</li>
                                <li><span class="target-title">Organizational chart:</span> Display the organizational chart, people present in the chart, experiences, knowledge and skills of each person.</li>
                            </ul>
                        </div>
                        :
                        <div style={{ direction: lang ? 'ltr' : 'rtl' }}>
                            <ul class="item-list">
                                <li><span className='target-title'>ایجاد گزارشات داشبوردی:</span > طراحی، پردازش و مدل‌ سازی داده های</li>
                                <li><span className='target-title'>گزارش‌ دهی منظم:</span>تهیه گزارش‌های عملکرد روزانه، ماهیانه و سالانه از طریق بستر وب</li>
                                <li><span className='target-title'>پیش‌ بینی تولید: </span>پیش بینی و ایجاد برنامه تولید ماه آینده به صورت هوشمند براساس نیاز واحد فروش</li>
                                <li><span className='target-title'>مدیریت مواد اولیه:</span>پیش‌بینی میزان مواد اولیه و مصرفی مورد نیاز برای فرآیند تولید</li>
                                <li><span className='target-title'>تحلیل راندمان:</span>نمایش و تحلیل راندمان عملیاتی، راندمان تولید و سرعت تولید</li>
                                <li><span className='target-title'>گزارش عملکرد خطوط تولید:</span>ارائه گزارش‌هایی جامع از عملکرد خطوط تولید و سوابق آن‌ها</li>
                                <li><span className='target-title'>محاسبه پاداش بهره وری:</span>نمایش آنلاین پاداش بهره‌وری تولید و میزان اضافه‌کاری ماهانه</li>
                                <li><span className='target-title'>چارت سازمانی:</span>نمایش چارت سازمانی، افراد حاظر در چارت، تجارب، دانش و مهارت های هر فرد</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <Home />
        </>
    );
}
 
export default TargetsSite;


