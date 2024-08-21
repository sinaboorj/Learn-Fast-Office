import { useContext} from "react"
import { DashboardContext } from "../context/dashboardContext";
import { PublicContext } from "../context/publicContext";
import Strings from "../helper/strings";
import { BsInfoCircleFill } from 'react-icons/bs'


const ShowDateDashboard = () => {
    const { lang } = useContext(PublicContext)
    const { data, filterDate, startDate, endDate, setStartDate, setEndDate } = useContext(DashboardContext)
    return (
        <>
            <div className="dashboard-text">
                DASHBOARD
            </div>
      
            <div className="custom-date" >
                <BsInfoCircleFill
                    title={Strings.HelpTextDateInDashboard}
                    style={{ marginRight: '10px', color: 'white', margin: '0 10px', cursor: 'pointer', fontSize: '16px' }}
                /><span> {Strings.StartDate}</span>
                <input value={startDate} onChange={(e) => setStartDate(e.target.value)}
                    className="input-date" autoComplete='off' tabIndex={0}
                    style={{
                        border: filterDate === 'Custom' ? 'solid 1px rgba(228, 195, 7, 0.74)' : 'none',
                    }}
                    disabled={filterDate !== 'Custom' ? true : false}
                />
         
                <span> {Strings.EndDate}</span>
                <input value={endDate} onChange={(e) => setEndDate(e.target.value)}
                    className="input-date" autoComplete='off' tabIndex={1}
                    style={{
                        border: filterDate === 'Custom' ? 'solid 1px rgba(228, 195, 7, 0.74)' : 'none'
                    }}
                    disabled={filterDate !== 'Custom' ? true : false}
                />
            </div>
        </>
    );
}
 
export default ShowDateDashboard;