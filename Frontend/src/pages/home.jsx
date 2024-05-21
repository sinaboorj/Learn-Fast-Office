import '../css/home.css'
import '../css/register.css'
import Planning from '/sysImage/Planning.jpg'
import Analysis from '/sysImage/Analysis.jpg'
import Repairs from '/sysImage/Repairs.jpg'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

const Home = () => {
    const { language } = useContext(UserContext);
    return (
        <>
            <br/><br/><br/>
                <div className="c-plan-container">
                <div className='right'>
                    
                    <div className='logo-format'>
                        <div className='c-plan'>
                            <div>
                                <img src={Planning} className="c-plan-pic" width={200} height={200} alt="c-plan backend" />
                            </div>
                            <div>
                                <li className='c-plan-item'>Node.js</li>
                                <li className='c-plan-item'>Express</li>
                            </div>
                        </div>
                        <div className='c-plan'>
                            <div>
                                <img src={Repairs} className="c-plan-pic" width={200} height={200} alt="c-plan frontend" />
                            </div>
                            <div>
                                <li className='c-plan-item'>React.js</li>
                                <li className='c-plan-item'>JavaScript</li>
                                <li className='c-plan-item'>CSS</li>
                                <li className='c-plan-item'>HTML</li>
                            </div>
                        </div>
                        <div className='c-plan'>
                            <div>
                                <img src={Analysis} className="c-plan-pic" width={200} height={200} alt="c-plan database" />
                            </div>
                            <div>
                                <li className='c-plan-item' style={{}}>پايش و تحليل دادها</li>
                                <li className='c-plan-item'>محاسبه پاداش بهره وري</li>
                                <li className='c-plan-item'>محاسبه اضافه كاري</li>
                                <li className='c-plan-item'>پيش بيني ها</li>
                                <li className='c-plan-item'>محاسبه شاخص ها</li>
                                <li className='c-plan-item'>تهيه گزارشات داشبوردي</li>
                                <li className='c-plan-item'>ثبت اطلاعات سامانه ها</li>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div className='img-backgrand'></div> {/* use background-image in CSS */}
                </div>
                
            <br />
        </>
    );
}
 
export default Home;