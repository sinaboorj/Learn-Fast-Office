import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPCircleFill, BsInfoCircleFill } from 'react-icons/bs'
import DateFilter from './dateFilter';
import { useContext } from 'react';
import { DashboardContext } from '../context/dashboardContext';
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';

const DashboardTags = () => {
    const { lang } = useContext(PublicContext);

    const { data, filterDate } = useContext(DashboardContext)
    const production = Math.ceil((data.TotalProduction) / 1000)
    const plan = Math.ceil((data.TotalPlan) / 1000)
    const executionPercent = Math.round((production / plan) * 100)
    const Lastproduction = Math.ceil((data.LastTotalProduction) / 1000)
    const growth = Math.round((production - Lastproduction) / Lastproduction * 100)
    
    return (
        <>
            <hr />
            <h4 className="dashboard-text">
                DASHBOARD
            </h4>
            <div className="dashboard-items">
                <DateFilter />
             
                <div className="dashboard-item product">
                    {Strings.PRODUCT} <BsFillArchiveFill className="d-icon" /><br />
                    <div className="amounts">
                        <span className="amount">{production} Ton</span>
                        {lang
                            ? <>  {/*En */}
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}>
                                    <BsInfoCircleFill title='Growth compared to the previous period' style={{ marginRight: '2px' }} />
                                    {Strings.Growth}: {growth}%
                                </span>
                        
                                <span className="last-production">
                                    <BsInfoCircleFill title={`Production of the same period as before`} style={{ marginRight: '2px' }} />
                                    {Strings.Previous}: {Lastproduction} Ton
                                </span>
                            </>
                            :
                            <>  {/*Fa */}
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}>
                                    <BsInfoCircleFill title='رشد تولید به دوره مشابه قبل' style={{ margin: '0 4px 0 0' }} /> {Strings.Growth}:
                                    <span style={{ direction: 'rtl', marginLeft: '2px' }}> {growth}% </span> </span>
                        
                                <span className="last-production">
                                    <BsInfoCircleFill title='تولید دوره مشابه قبل' style={{ margin: '0 4px 0 0' }} />  {Strings.Previous}:
                                    <span style={{ marginLeft: '2px' }}>{Lastproduction} Ton </span>
                                </span>
                            </>
                        }
           
                    </div>
               
                </div>

                <div className="dashboard-item plan">
                    {Strings.PLAN} <BsPCircleFill className="d-icon" />
                    <div className="amounts">
                        <span className="amount">{plan} Ton</span>

                        {lang
                            ? <>  
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}> {/*En */}
                                    <BsInfoCircleFill title='Growth compared to the previous period' style={{ marginRight: '2px' }} />
                                    {Strings.Growth}: {growth}%
                                </span>
                            </>
                            :
                            <>  
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}> {/*Fa */}
                                    <BsInfoCircleFill title='رشد تولید به دوره مشابه قبل' style={{ margin: '0 4px 0 0' }} />  {Strings.Execution}:
                                    <span style={{ direction: 'rtl', marginLeft: '2px' }}>{executionPercent}% </span>
                                </span>
                            </>
                        }

                    </div>
                </div>

            </div>
            <div className="lines categories">
                    
            </div>
            <br />
        </>
    );
}
 
export default DashboardTags;