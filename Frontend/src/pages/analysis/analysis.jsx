import { useContext } from 'react';
import '../../sass/analysis.scss'
import folder_img from '../../../public/sysImage/FY1.png'
import Strings from '../../helper/strings';
import { UserContext } from '../../context/userContext';
import { PublicContext } from '../../context/publicContext';
import InsigImage from '../../public/insigImage';

const Analysis = () => {
     const { lang } = useContext(PublicContext)
     const { userData } = useContext(UserContext);

     return (
          <>
               {userData?.token !== undefined &&
                    <div className="analysis" >
                         <div className='folder' style={{ direction: lang ? 'ltr' : 'rtl', width: '100%' }}>
                              <div className='section-title'>
                                   <img src={folder_img} alt="Chart-img" className='folder-img' />
                                   <span style={{ margin: '0px 10px' }} >{Strings.Analysis_title}</span>
                              </div>
                              <div className='folder-summry'>
                                   <p>{Strings.Analysis_discription}</p>
                              </div>
                         </div>
                         <div className='discription' style={{ flexDirection: !lang && 'row-reverse' }}>

                              <ul className='items-title' style={{ direction: !lang && 'rtl' }}>
                                   <li className='items'>{Strings.Analysis_title_1} </li>
                                   <span className='under-items'>{Strings.Analysis_job_1}</span>
                              </ul>
                              <ul className='items-title' style={{ direction: !lang && 'rtl' }}>
                                   <li className='items'>{Strings.Analysis_title_2} </li>
                                   <span className='under-items'>{Strings.Analysis_job_2}</span>
                              </ul>
                              <ul className='items-title' style={{ direction: !lang && 'rtl' }}>
                                   <li className='items'>{Strings.Analysis_title_3} </li>
                                   <span className='under-items'>{Strings.Analysis_job_3}</span>
                              </ul>
                              <ul className='items-title' style={{ direction: !lang && 'rtl' }}>
                                   <li className='items'>{Strings.Analysis_title_4} </li>
                                   <span className='under-items'>{Strings.Analysis_job_4}</span>
                              </ul>
                              <ul className='items-title' style={{ direction: !lang && 'rtl' }}>
                                   <li className='items'>{Strings.Analysis_title_5} </li>
                                   <span className='under-items'>{Strings.Analysis_job_5}</span>
                              </ul>
                              <ul className='items-title' style={{ direction: !lang && 'rtl' }}>
                                   <li className='items'>{Strings.Analysis_title_6} </li>
                                   <span className='under-items'>{Strings.Analysis_job_6}</span>
                              </ul>
                              <ul className='items-title' style={{ direction: !lang && 'rtl' }}>
                                   <li className='items'>{Strings.Analysis_title_7}</li>
                                   <li className='under-under-items'>{Strings.Analysis_job_7_1} </li>
                                   <li className='under-under-items'>{Strings.Analysis_job_7_2} </li>
                                   <li className='under-under-items'>{Strings.Analysis_job_7_3} </li>
                                   <li className='under-under-items'>{Strings.Analysis_job_7_4} </li>
                              </ul>
                         </div>

                    </div>
               }
               <div className={lang ? 'img-backgrand-en' : 'img-backgrand-fa'}></div> {/* use background-image in CSS */}
               <div className="chart">
               </div>
               <InsigImage />
          </>
     );
}
 
export default Analysis;