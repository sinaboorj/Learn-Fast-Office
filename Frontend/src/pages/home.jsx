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
import Strings from '../helper/strings'


const Home = () => {
    const { lang } = useContext(LanguageContext);
    const nav = useNavigate();
    return (
        <>
            <br /><br /><br />
            <div className="c-plan-container">
              
                    
                <div className='logo-format'>
                    <div className='c-plan'>
                        {lang
                            ? <img src={PlanningEn} className="c-plan-pic" alt="c-plan backend" />
                            : <img src={PlanningFa} className="c-plan-pic" alt="c-plan backend" />
                        }
                        <div className='home-items' style={{ direction: lang ? 'ltr' : 'rtl' }}>
                            <li className='c-plan-item'>Node.js</li>
                            <li className='c-plan-item'>Express</li>
                        </div>
                    </div>
                    <div className='c-plan'>
                        {lang
                            ? < img src={RepairsEn} className="c-plan-pic" alt="c-plan frontend" />
                            : < img src={RepairsFa} className="c-plan-pic" alt="c-plan frontend" />
                        }
                        <div className='home-items' style={{ direction: lang ? 'ltr' : 'rtl' }}>
                            <li className='c-plan-item'>React.js</li>
                            <li className='c-plan-item'>JavaScript</li>
                            <li className='c-plan-item'>CSS</li>
                            <li className='c-plan-item'>HTML</li>
                        </div>
                    </div>
                    <div className='c-plan'>
                        {lang
                            ? < img src={AnalysisEn} className="c-plan-pic" alt="c-plan database" onClick={() => { nav('/api/monitoring-analysis') }} />
                            :  < img src={AnalysisFa} className="c-plan-pic" alt="c-plan database" onClick={() => { nav('/api/monitoring-analysis') }} />
                        }
                        <div className='home-items' style={{ direction: lang ? 'ltr' : 'rtl' }}>
                            <li className='c-plan-item'>{Strings.Data_monitoring_and_analysis}</li>
                            <li className='c-plan-item'>{Strings.Calculation_of_productivity_bonus}</li>
                            <li className='c-plan-item'>{Strings.Calculation_of_overtime}</li>
                            <li className='c-plan-item'>{Strings.Production_forecast_and_required_materials}</li>
                            <li className='c-plan-item'>{Strings.Calculation_of_indicators}</li>
                            <li className='c-plan-item'>{Strings.Preparation_of_dashboard_reports}</li>
                            <li className='c-plan-item'>{Strings.Sites_information_registration}</li>
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