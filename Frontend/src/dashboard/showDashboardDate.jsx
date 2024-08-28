import { useContext, useEffect } from "react";  
import { DashboardContext } from "../context/dashboardContext";  
import { PublicContext } from "../context/publicContext";  
import Strings from "../helper/strings";  
import dashFunction from "../helper/dashFunction";

const ShowDashboardDate = () => {
    const { lang } = useContext(PublicContext)
    const { filterDate, startDate, endDate, customStartDate, setCustomStartDate, setEndDate, fetchData,
        custemEndDate, setCustomEndDate, setSubmitCustomDate, setStartDate, setLastStartDate, setLastEndDate,
        submitCustomDate
    } = useContext(DashboardContext)
   
    const { filterDateFunction } = dashFunction({ customStartDate,custemEndDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate })


    const formatDate = (value) => {
        if (value.length < 5) return value // کمتر از 5 رقم  
        if (value.length < 7) return `${value.slice(0, 4)}/${value.slice(4)}` // 5 تا 6 رقم  
        return `${value.slice(0, 4)}/${value.slice(4, 6)}/${value.slice(6)}` // 7 تا 8 رقم  
    }

    const handleStartDateChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // فقط اعداد را نگه‌دارید  
        if (value.length <= 8) {
            const formattedValue = formatDate(value)
            setCustomStartDate(formattedValue)
        }
    };

    const handleEndDateChange = (e) => {
        const value = e.target.value.replace(/\D/g, "") // فقط اعداد را نگه‌دارید  
        if (value.length <= 8) {
            const formattedValue = formatDate(value)
            setCustomEndDate(formattedValue)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (customStartDate && custemEndDate) {
            setSubmitCustomDate(!submitCustomDate)
            console.clear()
        } else {
            alert('تاریخ شروع و پایان را وارد کنید')
        }
    };


    useEffect(() => {  
        filterDateFunction(filterDate) 
        fetchData() 
    }, [submitCustomDate]) 


    return (
        <div className="dashboard-nav">
            <span className="dashboard-text">
                DASHBOARD
            </span>
            <div className="custom-date" >

                {
                    filterDate !== 'Custom' // اگر تاریخ شروع چیزی غیر از سفارشی بود
                        ?
                        <>
                            <span> {Strings.StartDate}</span>
                            <input
                                value={startDate}
                                className="input-date" autoComplete='off' tabIndex={0}
                                style={{ border: 'solid 1px black' }}
                                disabled={true}
                            />
                 
                            <span> {Strings.EndDate}</span>
                            <input value={endDate}
                                className="input-date" autoComplete='off' tabIndex={1}
                                style={{ border: 'solid 1px black' }}
                                disabled={true}
                            />
                        </>
                        :   // اگر تاریخ شروع سفارشی بود
                        <>
                            <form onSubmit={handleSubmit} className="dashbordAlignDate">
                                <span>{Strings.StartDate}</span>
                                <input className="input-custom-date"
                                    type="text"
                                    value={customStartDate}
                                    onChange={handleStartDateChange}
                                    placeholder="مثال: 14020101"
                                />
                                <span>{Strings.EndDate}</span>
                                <input className="input-custom-date"
                                    type="text"
                                    value={custemEndDate}
                                    onChange={handleEndDateChange}
                                    placeholder="مثال: 14020131"
                                />
                                <input type='submit' value={Strings.Ok}
                                    style={{
                                        width: '57px',
                                        textAlign: 'center',
                                        backgroundColor: 'green',
                                        border: 'solid 1px black',
                                        borderRadius: '3px',
                                        height: '30px',
                                        fontWeight: '500'
                                    }} />
                            </form>
                        </>
                }
            </div>
        </div>
    );
}
 
export default ShowDashboardDate;


   
   
