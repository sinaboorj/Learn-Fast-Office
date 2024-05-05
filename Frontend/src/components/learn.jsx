import '../css/learn.css'
import '../css/register.css'
import backendImg from '/sysImage/backend.jpg'
import frontendImg from '/sysImage/frontend.jpg'
import databaseImg from '/sysImage/database.jpg'
import learnImg from '/sysImage/skill.jpg'

const Learn = () => {
    return (
        <>
            <hr />
            <div className="learn-container">

                <div className='img-backgrand'></div> {/* use background-image in CSS */}
                
                <div className='right'>
                    <div className='learn-text'>
                        <h5 style={{ marginBottom: '20px' }}>Teaching programming from beginner to advanced</h5>
                        <span style={{ fontStyle: 'italic', fontWeight: '500', marginBottom: '20px' }}>Fast and professional web programming training</span>
                    </div>
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
                </div>
            </div>
           
        </>
    );
}
 
export default Learn;