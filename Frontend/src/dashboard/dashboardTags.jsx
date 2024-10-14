import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPCircleFill, BsInfoCircleFill } from 'react-icons/bs'
import DateFilter from './dateFilter';
import { useContext } from 'react';
import { DashboardContext } from '../context/dashboardContext';
import Strings from '../helper/strings';
import { PublicContext } from '../context/publicContext';
import 'react-calendar/dist/Calendar.css'; // استایل‌های پیش‌فرض
import ShowDashboardDate from './showDashboardDate';
import dashboardFunction from '../helper/dashboardFunction';


const DashboardTags = () => {
    const { lang } = useContext(PublicContext);
    const { data, filterDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate,
        dates, setDates, customStartDate, custemEndDate } = useContext(DashboardContext)
    
    const infoText = [
        'تولید دو روز قبل',
        'تولید دوره مشابه ماه قبل',
        'تولید دوره مشابه سال قبل',
        'تولید دوره مشابه سفارش  شده در روز، ماه یا سال قبل',
        'رشد تولید به روز قبل تر',
        'رشد تولید به دوره مشابه ماه قبل',
        'رشد تولید به دوره مشابه سال قبل',
        'رشد تولید به دوره مشابه سفارش شده در روز، ماه و یا سال قبل',
    ]
    let infoTextIndexLastProduction = 0
    let infoTextIndexGrowth = 0
        
    switch (filterDate) {
        case 'Day':
            infoTextIndexLastProduction = 0
            infoTextIndexGrowth = 4
            break;
        case 'Month':
            infoTextIndexLastProduction = 1
            infoTextIndexGrowth = 5
            break;
        case 'Year':
            infoTextIndexLastProduction = 2
            infoTextIndexGrowth = 6
            break;
        case 'Custom':
            infoTextIndexLastProduction = 3
            infoTextIndexGrowth = 7
            break;
    }
    
    let production = Math.round((data?.TotalProduction) / 1000)//تولید
    let plan = Math.round((data?.TotalPlan) / 1000)//برنامه
    const executionPercent = Math.round((production / plan) * 100)//درصد اجرا
    let Lastproduction = Math.round((data?.LastTotalProduction) / 1000)// تولید قبل
    let growth = Math.round((production - Lastproduction) / Lastproduction * 100)// رشد

    const { seperatorNumber } = dashboardFunction({ dates, setDates, customStartDate, custemEndDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate })
    
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
                                <span className="last-production">
                                    <BsInfoCircleFill className='info' title={`Production of the same period as before`} />
                                    {Strings.Previous}: {Lastproduction} Ton
                                </span>
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}>
                                    <BsInfoCircleFill className='info' title='Growth compared to the previous period' />
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
                        

                            </>
                            :
                            <>  {/*Fa */}
                                <span className="last-production">
                                    <BsInfoCircleFill className='info' title={infoText[infoTextIndexLastProduction]} />  {Strings.Previous}:
                                    <span style={{ marginLeft: '2px' }}>{Lastproduction} Ton </span>
                                </span>
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}>
                                    <BsInfoCircleFill className='info' title={infoText[infoTextIndexGrowth]} /> {Strings.Growth}:
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
                        

                            </>
                        }
           
                    </div>
               
                </div>
                
                {/* *********************************** PLAN **************************** */}
                <div className="dashboard-item plan">
                    {Strings.PLAN} <BsPCircleFill className="d-icon" style={{ fontSize: '19px' }} />
                    <div className="amounts">
                        <span className="amount">{plan} Ton</span>

                        {lang
                            ? <>
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}> {/*En */}
                                    <BsInfoCircleFill className='info' title='Implementation of the production plan' />
                                    {Strings.Execution}: {executionPercent}%
                                </span>
                            </>
                            :
                            <>
                                <span className="amount" style={{ display: 'flex', alignItems: 'center' }}> {/*Fa */}
                                    <BsInfoCircleFill className='info' title='اجراي برنامه توليد' />  {Strings.Execution}:
                                    <span style={{ direction: 'rtl', marginLeft: '2px' }}>{executionPercent}% </span>
                                </span>
                            </>
                        }

                    </div>
                </div>

            </div>
            {/* <div className="lines categories">
                    
            </div> */}
        
        </>
    );
}
 
export default DashboardTags;