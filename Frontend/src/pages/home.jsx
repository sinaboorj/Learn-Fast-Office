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
                <div className="learn-container">
                <div className='right'>
                    
                    <div className='logo-format'>
                        <div className='learn'>
                            <div>
                                <img src={Planning} className="learn-backend" width={300} height={300} alt="learn backend" />
                            </div>
                            <div>
                                <li className='learn-item' style={{ marginTop: '15px' }}>Node.js</li>
                                <li className='learn-item'>Express</li>
                            </div>
                        </div>
                        <div className='learn'>
                            <div>
                                <img src={Repairs} className="learn-frontend" width={300} height={300} alt="learn frontend" />
                            </div>
                            <div>
                                <li className='learn-item' style={{ marginTop: '15px' }}>React.js</li>
                                <li className='learn-item'>JavaScript</li>
                                <li className='learn-item'>CSS</li>
                                <li className='learn-item'>HTML</li>
                            </div>
                        </div>
                        <div className='learn'>
                            <div>
                                <img src={Analysis} className="learn-database" width={300} height={300} alt="learn database" />
                            </div>
                            <div>
                                <li className='learn-item' style={{ marginTop: '15px' }}>MySQL</li>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='learn-text'>
                        <span style={{ marginBottom: '20px', fontWeight: '500' }}>{language ? 'Teaching programming from beginner to advanced' : 'آموزش برنامه نویسی از مبتدی تا پیشرفته'}</span>
                        <span style={{ marginBottom: '20px', fontSize: '14px' }}> {language ? 'Fast and professional web programming training' : 'آموزش سریع و حرفه ای برنامه نویسی وب'}</span>
                    </div>
                </div>
                <div className='img-backgrand'></div> {/* use background-image in CSS */}
                </div>
                
            <br />
        </>
    );
}
 
export default Home;