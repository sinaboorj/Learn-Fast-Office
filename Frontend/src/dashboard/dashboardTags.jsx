import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPCircleFill, BsInfoCircleFill } from 'react-icons/bs'
import DateFilter from './dateFilter';
import { useContext } from 'react';
import { DashboardContext } from '../context/dashboardContext';


const DashboardTags = () => {
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
                    PRODUCT <BsFillArchiveFill className="d-icon" /><br />
                    <div className="amounts">
                        <span className="amount">{production} Ton</span>
                   
                            <span className="amount"
                                style={{ display: 'flex', alignItems: 'center' }}>
                                <BsInfoCircleFill title={` قبل ${filterDate} مقایسه با مدت مشابه`} style={{ marginRight: '2px' }} />
                                Growth: {growth}% </span>
                            <span className="last-production">Previous: {Lastproduction} Ton</span>
                        </div>
               
                </div>

                <div className="dashboard-item plan">
                    PLAN <BsPCircleFill className="d-icon" />
                    <div className="amounts">
                        <span className="amount">{plan} Ton</span>
                        <span className="amount" style={{ display: 'flex', alignItems: 'center' }}><BsInfoCircleFill title="درصد اجرای برنامه" style={{ marginRight: '2px' }} /> Execution: {executionPercent}% </span>
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