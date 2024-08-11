

import InsigImage from "../public/insigImage";
import '../sass/dashboard.scss'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPCircleFill, BsInfoCircleFill } from 'react-icons/bs'
import DashFilter from "./filter";

const Dashboard = () => {
    return (
        <>
            <hr />
            <h4 className="dashboard-text">
                DASHBOARD
            </h4>
            <div className="dashboard-items">
                <DashFilter />

                <div className="dashboard-item product">
                    PRODUCT <BsFillArchiveFill className="d-icon" /><br />
                    <div className="amounts">
                        <span className="amount">25412 Ton</span>
                        <span className="amount" style={{display:'flex', alignItems:'center'}}><BsInfoCircleFill title="مقایسه با مدت مشابه قبل" style={{marginRight:'2px'}}/>Growth: 25% </span>
                    </div>
                </div>

                <div className="dashboard-item plan">
                    PLAN <BsPCircleFill className="d-icon" />
                    <div className="amounts">
                        <span className="amount">25412 Ton</span>
                        <span className="amount" style={{display:'flex', alignItems:'center'}}><BsInfoCircleFill title="مقایسه با مدت مشابه قبل" style={{marginRight:'2px'}}/> Execution: 25% </span>
                    </div>
                </div>

            </div>
            <div className="lines categories">
                    
                </div>
            <br />
            <InsigImage />
        </>
    );
}
 
export default Dashboard;