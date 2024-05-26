import { useContext } from 'react';
import '../../css/analysis.css'
import folder_img from '../../../public/sysImage/FY1.png'
import { LanguageContext } from '../../context/languageContext';
import '../../css/font.css'
import AnalysisChart from './analysisChart';

const Analysis = () => {
     const { language } = useContext(LanguageContext)
     return (
          <>
              <AnalysisChart />
               <div className='analysis' style={{ direction: language ? 'ltr' : 'rtl' }}>
                    <div className='analysis-title'>
                         <img src={folder_img} alt="Chart-img" className='folder-img' />
                         <span >{language ? 'Information analysis and monitoring unit' : 'واحد پايش و تحليل اطلاعات'}</span>
                    </div>
                    <div className='summry'>
                         <p>{language
                              ? 'This unit was created with a supervisor and an expert in 2013, focusing on the preparation of reports. The main duties of this unit are as follows:'
                              : 'اين واحد با تمركز بر تهيه گزارشات در سال 1393 با يك سرپرست و يك كارشناس ايجاد شد. عمده وظايف اين واحد به شرح ذيل ميباشد:'
                         }</p>
                    </div>
       
                    <div className='discription'>

                         <ul className='items-title'>
                              <li className='items'>{language ? 'Data monitoring and analysis:' : 'پايش و تحليل داده ها:'} </li>
                              <span className='under-items'>{language ? 'The process of collecting primary data, filtering data, preparing data, processing data and finally analyzing various data in order to extract useful information for decision making is one of the most important activities of this unit.' : 'فرایند جمع آوري داده هاي اوليه، فيلتر داده ها، آماده‌سازی داده ها ، پردازش داده ها و در نهايت تحلیل داده‌ هاي مختلف به منظور استخراج اطلاعات سودمند جهت تصمیم‌گیری، از مهم ترين فعاليت هاي اين واحد مي باشد.'}</span>
                         </ul>
                         <ul className='items-title'>
                              <li className='items'>{language ? 'Calculation of productivity bonus:' : 'محاسبه پاداش بهره وري:'} </li>
                              <span className='under-items'>{language ? 'At the end of each one-month period, the production productivity bonus is calculated based on the efficiency of the line (grade one, waste and oxide powder), the amount of consumption (roller, grease, types of oil) and the number of personnel.' : 'در پايان هر دوره يك ماهه پاداش بهره وري توليد بر اساس راندمان خط (درجه يك، ضايعات و پودر اكسيد) ، ميزان مصارف (غلطك، گريس، انواع روغن) و تعداد پرسنل محاسبه ميگردد.'}</span>
                         </ul>
                         <ul className='items-title'>
                              <li className='items'>{language ? 'Calculation of overtime:' : 'محاسبه اضافه كاري:'} </li>
                              <span className='under-items'>{language ? 'At the end of each one-month period, the average overtime is calculated based on the productivity of the production lines.' : 'در پايان هر دوره يك ماهه متوسط اضافه كاري براساس ميزان بهره وري خطوط توليدي محاسبه ميگردد.'}</span>
                         </ul>
                         <ul className='items-title'>
                              <li className='items'>{language ? 'Production forecast and required raw materials:' : 'پيش بيني توليد و مواد اوليه مورد نياز:'} </li>
                              <span className='under-items'>{language ? 'Production forecast and required raw materials:' : 'پيش بيني توليد، مواد اوليه و مصارف براساس شاخص ها و سياست هاي مبتني بر شرايط محاسبه مي گردد.'}</span>
                         </ul>
                         <ul className='items-title'>
                              <li className='items'>{language ? 'Calculation of indicators:' : 'محاسبه شاخص ها:'} </li>
                              <span className='under-items'>{language ? 'Indexes are calculated once every few years or if conditions change after raw data collection, data filtering, data preparation and data processing.' : 'محاسبه شاخص ها ها به صورت هر چند سال يك بار و يا در صورت تغيير شرايط بعد از فرایند جمع آوري داده هاي خام، فيلتر داده ها، آماده‌سازی داده ها و پردازش داده انجام ميگردد.'}</span>
                         </ul>
                         <ul className='items-title'>
                              <li className='items'>{language ? 'Preparation of dashboard reports:' : 'تهيه گزارشات داشبوردي:'} </li>
                              <span className='under-items'>{language ? 'On a daily, monthly and yearly basis, all kinds of management reports are prepared and presented by this unit in order to provide performance status and forecast in the form of a report or a dashboard (summary of targeted management reports).' : 'به صورت روزانه، ماهانه و سالانه انواع گزارشات مديريتي جهت ارائه وضيعت عملكرد و پيش بيني به صورت گزارش و يا داشبورد (خلاصه گزارشات هدفمند مديريتي) توسط اين واحد تهيه و ارايه ميگردد. '}</span>
                              <br /><br />
                              <span className='under-items'>{language ? 'Among the most important of them:' : 'از مهم ترين آن ها: '} </span>
                              <li className='under-under-items'>{language ? '' : 'گزارش صبحگاهي (توليد و توقفات)'} </li>
                              <li className='under-under-items'>{language ? '' : 'گزارش جامع عملكرد ماهيانه خطوط'} </li>
                              <li className='under-under-items'>{language ? '' : 'گزارش هيئت مديره به مجمع عمومي صاحبان سهام'} </li>
                         </ul>
                    </div>
                    
                    <div className='img-backgrand'></div> {/* use background-image in CSS */}
               </div>
              
          </>
     );
}
 
export default Analysis;