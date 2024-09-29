import { useContext, useEffect } from "react";  
import { DashboardContext } from "../context/dashboardContext";  
import { PublicContext } from "../context/publicContext";  
import Strings from "../helper/strings";  
import dashboardFunction from "../helper/dashboardFunction";

const ShowDashboardDate = () => {
    const { lang } = useContext(PublicContext)
    const { filterDate, startDate, endDate, customStartDate, setCustomStartDate, setEndDate, fetchData,
        custemEndDate, setCustomEndDate, setSubmitCustomDate, setStartDate, setLastStartDate, setLastEndDate,
        submitCustomDate, dates, setDates, selectedOptionCombo, setSelectedOptionCombo
    } = useContext(DashboardContext)
   
    const { filterDateFunction } = dashboardFunction({ dates, setDates, customStartDate, custemEndDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate })


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

    const handleChangeCombo = (event) => {
        setSelectedOptionCombo(event.target.value);
    };

    useEffect(() => {
        filterDateFunction(filterDate)
        fetchData()
    }, [submitCustomDate])


    return (
        <>
            <br />
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
                                    value={dates?.startDate}
                                    className="input-date" autoComplete='off' tabIndex={0}
                                    disabled={true}
                                />
                 
                                <span> {Strings.EndDate}</span>
                                <input value={dates?.endDate}
                                    className="input-date" autoComplete='off' tabIndex={1}
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
                                    <input type='submit' className="dashboard-submit" value={Strings.Ok} />
                                </form>
                            </>
                    }
                </div>
                <div className="line-combo">
                    <select
                        id="combo-box"
                        value={selectedOptionCombo}
                        onChange={handleChangeCombo}
                    >
                        <option className="line-combo-open" value="insig">کل گروه</option>
                        <option className="line-combo-open" value="k">کوثر</option>
                        <option className="line-combo-open" value="1">خط 1</option>
                        <option className="line-combo-open" value="3">خط 3</option>
                        <option className="line-combo-open" value="s">صنایع فلزی</option>
                        <option className="line-combo-open" value="630">خط 630</option>
                        <option className="line-combo-open" value="650">خط 650</option>
                        <option className="line-combo-open" value="l">لوله سازی</option>
                        <option className="line-combo-open" value="f">فولادسازی</option>
                    </select>

                </div>
            </div>
        </>
    );
}
 
export default ShowDashboardDate;


   
   
