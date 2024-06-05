import { useContext } from 'react';
import '../../css/analysis.css'
import folder_img from '../../../public/sysImage/FY1.png'
import { LanguageContext } from '../../context/languageContext';
import '../../css/font.css'
import AnalysisChart from './analysisChart';
import ManagerChart from '../manager/managerChart';
import Strings from '../../helper/strings';

const Analysis = () => {
     const { lang } = useContext(LanguageContext)

     return (
          <>
               <div className="analysis" >
                    <ManagerChart />
                    <AnalysisChart />
                    <div className='folder' style={{ direction: lang ? 'ltr' : 'rtl', width:'100%' }}>
                         <div className='analysis-title'>
                              <img src={folder_img} alt="Chart-img" className='folder-img' />
                              <span >{lang ? 'Information analysis and monitoring unit' : 'واحد پايش و تحليل اطلاعات'}</span>
                         </div>
                         <div className='folder-summry'>
                              <p>{ !lang
                                   ? 'This unit was created with a supervisor and an expert in 2013, focusing on the preparation of reports. The main duties of this unit are as follows:'
                                   : 'اين واحد با تمركز بر تهيه گزارشات در سال 1393 با يك سرپرست و يك كارشناس ايجاد شد. عمده وظايف اين واحد به شرح ذيل ميباشد:'
                              }</p>
                         </div>
                    </div>
                    <div className='discription' style={{ flexDirection: !lang && 'row-reverse' }}>

                         <ul className='items-title' style={{ direction:  !lang && 'rtl' }}>
                              <li className='items'>{Strings.Analysis_title_1} </li>
                              <span className='under-items'>{Strings.Analysis_job_1}</span>
                         </ul>
                         <ul className='items-title' style={{ direction:  !lang && 'rtl' }}>
                              <li className='items'>{Strings.Analysis_title_2} </li>
                              <span className='under-items'></span>
                         </ul>
                         <ul className='items-title' style={{ direction:  !lang && 'rtl' }}>
                              <li className='items'>{Strings.Analysis_title_3} </li>
                              <span className='under-items'></span>
                         </ul>
                         <ul className='items-title' style={{ direction:  !lang && 'rtl' }}>
                              <li className='items'>{Strings.Analysis_title_4} </li>
                              <span className='under-items'></span>
                         </ul>
                         <ul className='items-title' style={{ direction:  !lang && 'rtl' }}>
                              <li className='items'>{Strings.Analysis_title_5} </li>
                              <span className='under-items'> </span>
                         </ul>
                         <ul className='items-title' style={{ direction:  !lang && 'rtl' }}>
                              <li className='items'>{Strings.Analysis_title_6} </li>
                              <span className='under-items'> </span>
                         </ul>
                         <ul className='items-title' style={{ direction:  !lang && 'rtl' }}> 
                              <li className='items'>{Strings.Analysis_title_7}</li>
                              <li className='under-under-items'>{Strings.Analysis_title_7_1} </li>
                              <li className='under-under-items'>{Strings.Analysis_title_7_2} </li>
                              <li className='under-under-items'>{Strings.Analysis_title_7_3} </li>
                         </ul>
                    </div>
                    <div className='img-backgrand'></div> {/* use background-image in CSS */}
               </div>
          </>
     );
}
 
export default Analysis;