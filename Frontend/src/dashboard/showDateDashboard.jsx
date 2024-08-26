import { useContext, useEffect } from "react";  
import { DashboardContext } from "../context/dashboardContext";  
import { PublicContext } from "../context/publicContext";  
import Strings from "../helper/strings";  
import { BsInfoCircleFill } from 'react-icons/bs';  
import DatePicker from "react-multi-date-picker"; // Importing correctly 
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import dashFunction from "../helper/dashFunction";

const ShowDateDashboard = () => {
    const { lang } = useContext(PublicContext)
    const { data, filterDate, startDate, endDate, lastStartDate, lastEndDate, setStartDate,
        setEndDate, setLastStartDate, setLastEndDate, fetchData, } = useContext(DashboardContext)
    
    return (
        <>
            <div className="dashboard-text">
                DASHBOARD
            </div>
            <div className="custom-date" >
                <BsInfoCircleFill
                    title={Strings.HelpTextDateInDashboard}
                    style={{
                        margin: '5px 10px 5px', cursor: 'pointer', fontSize: '18px',
                        color: filterDate === 'Custom' ? '#bcbcbc' : 'black',
                    }} />
                {
                    filterDate !== 'Custom' // اگر تاریخ شروع چیزی غیر از سفارشی بود
                        ?
                        <>
                            <span> {Strings.StartDate}</span>
                            <input value={startDate} onChange={(e) => setStartDate(e.target.value)}
                                className="input-date" autoComplete='off' tabIndex={0}
                                style={{ border: 'solid 1px black' }}
                                disabled={true}
                            />
                 
                            <span> {Strings.EndDate}</span>
                            <input value={endDate} onChange={(e) => setEndDate(e.target.value)}
                                className="input-date" autoComplete='off' tabIndex={1}
                                style={{ border: 'solid 1px black' }}
                                disabled={true}
                            />
                        </>
                        :   // اگر تاریخ شروع سفارشی بود
                        <>
                            <span>{Strings.StartDate}</span>
                            <DatePicker 
                                calendar={persian}
                                locale={persian_fa}
                                value={startDate}
                            /> 
                            <span>{Strings.EndDate}</span>
                            <DatePicker 
                                calendar={persian}
                                locale={persian_fa}
                               value={endDate}
                            />

                        </>
                }
            </div>
        </>
    );
}
 
export default ShowDateDashboard;
   
   
