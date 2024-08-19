import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPCircleFill, BsInfoCircleFill } from 'react-icons/bs'
import DateFilter from './dateFilter';
import { useContext, useState } from 'react';
import { DashboardContext } from '../context/dashboardContext';
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';
import 'react-calendar/dist/Calendar.css'; // استایل‌های پیش‌فرض
import ShowDateDashboard from './showDateDashboard';

const DashboardTags = () => {
    const { lang } = useContext(PublicContext);
    const { data, filterDate } = useContext(DashboardContext)
    const production = Math.round((data.TotalProduction) / 1000)//تولید
    const plan = Math.round((data.TotalPlan) / 1000)//برنامه
    const executionPercent = Math.round((production / plan) * 100)//درصد اجرا
    const Lastproduction = Math.round((data.LastTotalProduction) / 1000)// تولید قبل
    const growth = Math.round((production - Lastproduction) / Lastproduction * 100)// رشد
    
    return (
        <>
            <ShowDateDashboard />
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
                                    <BsInfoCircleFill title={` رشد تولید به ${filterDate === 'Month' ? 'ماه' : 'سال'} قبل`} style={{ margin: '0 4px 0 0' }} /> {Strings.Growth}:
                                    <span style={{ direction: 'rtl', marginLeft: '2px' }}> {growth}% </span> </span>
                        
                                <span className="last-production">
                                    <BsInfoCircleFill title={`تولید دوره مشابه ${filterDate === 'Month' ? 'ماه' : 'سال'} قبل `} style={{ margin: '0 4px 0 0' }} />  {Strings.Previous}:
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
                                    <BsInfoCircleFill title='Implementation of the production plan' style={{ marginRight: '2px' }} />
                                    {Strings.Growth}: {executionPercent}%
                                </span>
                            </>
                            :
                            <>
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}> {/*Fa */}
                                    <BsInfoCircleFill title='اجراي برنامه توليد' style={{ margin: '0 4px 0 0' }} />  {Strings.Execution}:
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