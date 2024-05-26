import '../css/home.css'
import '../css/register.css'
import PlanningEn from '/sysImage/PlanningEn.jpg'
import AnalysisEn from '/sysImage/AnalysisEn.jpg'
import RepairsEn from '/sysImage/RepairsEn.jpg'
import PlanningFa from '/sysImage/PlanningFa.jpg'
import AnalysisFa from '/sysImage/AnalysisFa.jpg'
import RepairsFa from '/sysImage/RepairsFa.jpg'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from '../context/languageContext'

const Home = () => {
    const { language } = useContext(LanguageContext);
    const nav = useNavigate();
    return (
        <>
            <br /><br /><br />
            <div className="c-plan-container">
              
                    
                <div className='logo-format'>
                    <div className='c-plan'>
                        {language
                            ? <img src={PlanningEn} className="c-plan-pic" alt="c-plan backend" />
                            : <img src={PlanningFa} className="c-plan-pic" alt="c-plan backend" />
                        }
                        <div className='home-items' style={{ direction: language ? 'ltr' : 'rtl' }}>
                            <li className='c-plan-item'>Node.js</li>
                            <li className='c-plan-item'>Express</li>
                        </div>
                    </div>
                    <div className='c-plan'>
                        {language
                            ? < img src={RepairsEn} className="c-plan-pic" alt="c-plan frontend" />
                            : < img src={RepairsFa} className="c-plan-pic" alt="c-plan frontend" />
                        }
                        <div className='home-items' style={{ direction: language ? 'ltr' : 'rtl' }}>
                            <li className='c-plan-item'>React.js</li>
                            <li className='c-plan-item'>JavaScript</li>
                            <li className='c-plan-item'>CSS</li>
                            <li className='c-plan-item'>HTML</li>
                        </div>
                    </div>
                    <div className='c-plan'>
                        {language
                            ? < img src={AnalysisEn} className="c-plan-pic" alt="c-plan database" onClick={() => { nav('/api/monitoring-analysisEn') }} />
                            :  < img src={AnalysisFa} className="c-plan-pic" alt="c-plan database" onClick={() => { nav('/api/monitoring-analysisEn') }} />
                        }
                        <div className='home-items' style={{ direction: language ? 'ltr' : 'rtl' }}>
                            <li className='c-plan-item'>{language ? 'Data monitoring and analysis' : 'پايش و تحليل داده ها'}</li>
                            <li className='c-plan-item'>{language ? 'Calculation of productivity bonus' : 'محاسبه پاداش بهره وري'}</li>
                            <li className='c-plan-item'>{language ? 'Calculation of overtime' : 'محاسبه اضافه كاري'}</li>
                            <li className='c-plan-item'>{language ? 'Production forecast and required materials' : 'پيش بيني توليد و مواد مورد نياز'}</li>
                            <li className='c-plan-item'>{language ? 'Calculation of indicators' : 'محاسبه شاخص ها'}</li>
                            <li className='c-plan-item'>{language ? 'Preparation of dashboard reports' : 'تهيه گزارشات داشبوردي'}</li>
                            <li className='c-plan-item'>{language ? 'Sites information registration' : 'ثبت اطلاعات سامانه ها'}</li>
                        </div>
                    </div>
                </div>
                <br />
                
               
            </div>
                
            <br />
        </>
    );
}
 
export default Home;