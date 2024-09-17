import { useContext } from 'react'
import { PublicContext } from '../context/publicContext';
import Strings from '../helper/strings';

const AboutSite = () => {
    const { lang } = useContext(PublicContext);
     
    return (
        <>
            <br />
            <div className='goal' style={{ direction: lang ? 'ltr' : 'rtl' }}>{Strings.Target_title}</div>
            <div className="targets">
                {lang
                    ?
                    <div style={{ direction: lang ? 'ltr' : 'rtl' }}>
                        <li><span className='target-title'>Creating reporting dashboards:</span> Designing and implementing dashboards that provide quick and easy access to reports and information for managers and experts.</li>
                        <li><span className='target-title'>Data processing and modeling:</span> Processing and analyzing data related to the performance of units and production lines.</li>
                        <li><span className='target-title'>Regular reporting:</span> Preparation of daily, monthly and annual performance reports through the web platform.</li>
                        <li><span className='target-title'>Production Forecast:</span> Predicting and creating the next month's production plan intelligently based on the needs of the sales unit.</li>
                        <li><span className='target-title'>Management of raw materials:</span> Predicting the amount of raw materials and consumables needed for the production process.</li>
                        <li><span className='target-title'>Efficiency analysis:</span> Display and analysis of operational efficiency, production efficiency and production speed.</li>
                        <li><span className='target-title'>Production line performance report:</span> Providing comprehensive reports on the performance of production lines and their records.</li>
                        <li><span className='target-title'>Calculation of productivity bonus:</span> Online display of production productivity bonus and monthly overtime amount.</li>
                        <li><span className='target-title'>Organizational chart:</span> Display the organizational chart, people present in the chart, experiences, knowledge and skills of each person.</li>
                    </div>
                    :

                    <div style={{ direction: lang ? 'ltr' : 'rtl' }}>
                        <li><span className='target-title'>ایجاد داشبوردهای گزارش‌ گیری:</span >طراحی و پیاده‌سازی داشبوردهایی که دسترسی سریع و آسان مدیران و کارشناسان به گزارشات و اطلاعات را فراهم می‌کند.</li>
                        <li><span className='target-title'>پردازش و مدل‌ سازی داده‌ها:</span> پردازش و تجزیه و تحلیل داده‌های مربوط به عملکرد واحدها و خطوط تولید</li>
                        <li><span className='target-title'>گزارش‌ دهی منظم:</span>تهیه گزارش‌های عملکرد روزانه، ماهیانه و سالانه از طریق بستر وب</li>
                        <li><span className='target-title'>پیش‌ بینی تولید: </span>پیش بینی و ایجاد برنامه تولید ماه آینده به صورت هوشمند براساس نیاز واحد فروش</li>
                        <li><span className='target-title'>مدیریت مواد اولیه:</span>پیش‌بینی میزان مواد اولیه و مصرفی مورد نیاز برای فرآیند تولید</li>
                        <li><span className='target-title'>تحلیل راندمان:</span>نمایش و تحلیل راندمان عملیاتی، راندمان تولید و سرعت تولید</li>
                        <li><span className='target-title'>گزارش عملکرد خطوط تولید:</span>ارائه گزارش‌هایی جامع از عملکرد خطوط تولید و سوابق آن‌ها</li>
                        <li><span className='target-title'>محاسبه پاداش بهره‌وری:</span>نمایش آنلاین پاداش بهره‌وری تولید و میزان اضافه‌کاری ماهانه</li>
                        <li><span className='target-title'>چارت سازمانی:</span>نمایش چارت سازمانی، افراد حاظر در چارت، تجارب، دانش و مهارت های هر فرد</li>
                    </div>
                }
                <br />
            </div>
        </>
    );
}
 
export default AboutSite;