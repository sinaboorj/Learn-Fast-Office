import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPCircleFill, BsInfoCircleFill } from 'react-icons/bs'
import DateFilter from './dateFilter';
import { useContext } from 'react';
import { DashboardContext } from '../context/dashboardContext';
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';
import 'react-calendar/dist/Calendar.css'; // استایل‌های پیش‌فرض
import ShowDashboardDate from './showDashboardDate';
import dashFunction from '../helper/dashFunction';

const DashboardTags = () => {
    const { lang } = useContext(PublicContext);
    const { data, filterDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate,
        dates, setDates, customStartDate,custemEndDate } = useContext(DashboardContext)
    
    let production = Math.round((data.TotalProduction) / 1000)//تولید
    let plan = Math.round((data.TotalPlan) / 1000)//برنامه
    const executionPercent = Math.round((production / plan) * 100)//درصد اجرا
    let Lastproduction = Math.round((data.LastTotalProduction) / 1000)// تولید قبل
    let growth = Math.round((production - Lastproduction) / Lastproduction * 100)// رشد

    const { seperatorNumber } = dashFunction({ dates, setDates, customStartDate, custemEndDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate })
    
    production = seperatorNumber(production)
    plan = seperatorNumber(plan)
    Lastproduction = seperatorNumber(Lastproduction)
    if (growth === Infinity) growth = 0

    return (
        <>
            <ShowDashboardDate />{/* نمایش تاریخ شروع و پایان بالای داشبرد*/}
            <div className="dashboard-items">
                <DateFilter /> {/* فیلتر تاریخ */}

                {/* *********************************** PRODUCTION **************************** */}
                <div className="dashboard-item product">
                    {Strings.PRODUCT} <BsFillArchiveFill className="d-icon" /><br />
                    <div className="amounts">
                        <span className="amount">{production} Ton</span>
                        {lang
                            ? <>  {/*En */}
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}>
                                    <BsInfoCircleFill className='info' title='Growth compared to the previous period' style={{ color: '#424242' }} />
                                    {Strings.Growth}:
                                    <span
                                        style={{
                                            marginLeft: '4px',
                                            textAlign: 'center',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                        {growth}%
                                    </span>
              
                                </span>
                        
                                <span className="last-production">
                                    <BsInfoCircleFill className='info' title={`Production of the same period as before`} style={{ color: '#424242' }} />
                                    {Strings.Previous}: {Lastproduction} Ton
                                </span>
                            </>
                            :
                            <>  {/*Fa */}
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}>
                                    <BsInfoCircleFill className='info' title={` رشد تولید به ${filterDate === 'Month' ? 'ماه' : 'سال'} قبل`} style={{ color: '#424242' }} /> {Strings.Growth}:
                                    <span
                                        style={{
                                            marginLeft: '4px',
                                            textAlign: 'center',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                        {growth}%
                                    </span>
                                </span>
                        
                                <span className="last-production">
                                    <BsInfoCircleFill className='info' title={`تولید دوره مشابه ${filterDate === 'Month' ? 'ماه' : 'سال'} قبل `} style={{ color: '#424242' }} />  {Strings.Previous}:
                                    <span style={{ marginLeft: '2px' }}>{Lastproduction} Ton </span>
                                </span>
                            </>
                        }
           
                    </div>
               
                </div>
                
                {/* *********************************** PLAN **************************** */}
                <div className="dashboard-item plan">
                    {Strings.PLAN} <BsPCircleFill className="d-icon" style={{fontSize:'19px'}} />
                    <div className="amounts">
                        <span className="amount">{plan} Ton</span>

                        {lang
                            ? <>
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}> {/*En */}
                                    <BsInfoCircleFill className='info' title='Implementation of the production plan' style={{ color: '#000025' }} />
                                    {Strings.Execution}: {executionPercent}%
                                </span>
                            </>
                            :
                            <>
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}> {/*Fa */}
                                    <BsInfoCircleFill className='info' title='اجراي برنامه توليد' style={{ color: '#000025' }} />  {Strings.Execution}:
                                    <span style={{ direction: 'rtl', marginLeft: '2px' }}>{executionPercent}% </span>
                                </span>
                            </>
                        }

                    </div>
                </div>

            </div>
            {/* <div className="lines categories">
                    
            </div> */}
            <br />
        </>
    );
}
 
export default DashboardTags;