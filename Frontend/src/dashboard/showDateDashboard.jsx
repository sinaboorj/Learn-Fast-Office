import { useContext, useState } from "react"
import { DashboardContext } from "../context/dashboardContext";

const ShowDateDashboard = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const { data, filterDate } = useContext(DashboardContext)
    return (
        <>
            <div className="dashboard-text">
                DASHBOARD
            </div>

            <div className="custom-date" >
                <span >تاريخ شروع:</span>
                <input type="email" value={startDate} onChange={(e) => setStartDate(e.target.value)}
                    placeholder="Email..." tabIndex={0} className="input-date" />
         
                <span>تاريخ پايان:</span>
                <input value={endDate} onChange={(e) => setEndDate(e.target.value)}
                    placeholder="Password..." className="input-date" autoComplete='off' tabIndex={1} />
            </div>
        </>
    );
}
 
export default ShowDateDashboard;