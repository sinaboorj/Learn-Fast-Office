import '../css/home.css'
import '../css/register.css'
import backendImg from '/sysImage/backend.jpg'
import frontendImg from '/sysImage/frontend.jpg'
import databaseImg from '/sysImage/database.jpg'

const Home = () => {
    return ( 
        <>
           <br/><br/><br/><br/>
            <div className="learn-container">
                
                <div className='right'>
                    
                    <div className='logo-format'>
                        <div className='learn'>
                            <div>
                                <img src={backendImg} className="learn-backend" width={100} height={100} alt="learn backend" />
                            </div>
                            <div>
                                <li className='learn-item' style={{ marginTop: '15px' }}>Node.js</li>
                                <li className='learn-item'>Express</li>
                            </div>
                        </div>
                        <div className='learn'>
                            <div>
                                <img src={frontendImg} className="learn-frontend" width={100} height={100} alt="learn frontend" />
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
                                <img src={databaseImg} className="learn-database" width={100} height={100} alt="learn database" />
                            </div>
                            <div>
                                <li className='learn-item' style={{ marginTop: '15px' }}>MySQL</li>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='learn-text'>
                        <span style={{ marginBottom: '20px',fontWeight: '500' }}>Teaching programming from beginner to advanced</span>
                        <span style={{  marginBottom: '20px',fontSize:'14px' }}>Fast and professional web programming training</span>
                    </div>
                </div>
                <div className='img-backgrand'></div> {/* use background-image in CSS */}
            </div>
        </>
     );
}
 
export default Home;