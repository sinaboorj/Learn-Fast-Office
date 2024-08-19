import { createContext, useContext, useEffect, useState } from "react"  
import { UserContext } from "./userContext"  
import axios from "axios"  
import dashFunction from "../helper/dashFunction"  
import moment from 'moment-jalaali'   

export const DashboardContext = createContext()  

const DashboardContextProvider = ({ children }) => {  
    const { backendUrl, headers } = useContext(UserContext)  
    const [filterDate, setFilterDate] = useState(JSON.parse(localStorage.getItem('filterDate')) ?? 'Month')  
    const [data, setData] = useState(JSON.parse(localStorage.getItem('production')) ?? {})  
    const [dashboardLoading, setDashboardLoading] = useState(true)  
    
    const { formatDateString, PreviousMonth, PreviousYear } = dashFunction()  
    const today = moment()  // امروز
    const yesterday = today.clone().subtract(1, 'days')  //ديروز
    const startOfYear = moment(`${today.jYear()}/01/01`, 'jYYYY/jMM/jDD')  //ابتداي سال

    const [beginningOfMonth, setBeginningOfMonth] = useState(formatDateString(today.startOf('jMonth').format('jYYYY/jM/jD'))) // شروع ماه جاري
    const [theDayBefore, setTheDayBefore] = useState(formatDateString(yesterday.format('jYYYY/jM/jD'))) // روز قبل
    const [beginningOfLastMonth, setBeginningOfLastMonth] = useState(PreviousMonth(beginningOfMonth)) // ابتداي ماه قبل  
    const [thePreviousDayOfMonth, setThePreviousDayOfMonth] = useState(PreviousMonth(theDayBefore))  // روز قبل براي ماه قبل
    const [startOfLastYear, setStartOfLastYear] = useState(PreviousYear(startOfYear.format('jYYYY/jMM/jDD')))  //ابتداي سال قبل
    const [theDayBeforeInLastYear, setTheDayBeforeInLastYear] = useState(PreviousYear(theDayBefore))  // ابتداي روز قبل براي سال قبل

    const fetchData = async () => {  
        let startDate, endDate, lastStartDate, lastEndDate  

        if (filterDate === 'Month') {  
            startDate = beginningOfMonth  
            endDate = theDayBefore  
            lastStartDate = beginningOfLastMonth  
            lastEndDate = thePreviousDayOfMonth  
        } else if (filterDate === 'Year') {  
            startDate = startOfYear.format('jYYYY/jMM/jDD')  
            endDate = theDayBefore  
            lastStartDate = startOfLastYear  
            lastEndDate = theDayBeforeInLastYear  
        } else if (filterDate === 'Custom') {  
            // فرض بر این است که تاریخ شروع و پایان در اینجا از جایی دیگر (مثلاً ورودی کاربر) دریافت می‌شود  
            // به عنوان مثال:  
            startDate = localStorage.getItem('customStartDate') || theDayBefore // تاریخ شروع دلخواه  
            endDate = localStorage.getItem('customEndDate') || theDayBefore // تاریخ پایان دلخواه  
            lastStartDate = "" // می‌توان به نحوی محاسبه کرد  
            lastEndDate = "" // می‌توان به نحوی محاسبه کرد  
        } else {  
            startDate = beginningOfMonth // پیش‌فرض در صورت عدم شناسایی  
            endDate = theDayBefore  
            lastStartDate = beginningOfLastMonth  
            lastEndDate = thePreviousDayOfMonth  
        }  

        const dates = { startDate, endDate, lastStartDate, lastEndDate }  
console.log(dates)
        try {  
            const response = await axios.post(`${backendUrl}/api/products`, dates, { headers })  
            setData(response.data)  
        } catch (error) {  
            console.error(error)  
        } finally {  
            setDashboardLoading(false)  
        }  
    }  

    useEffect(() => {  
        if (data !== undefined) {  
            localStorage.setItem('production', JSON.stringify({  
                TotalProduction: data?.TotalProduction,  
                TotalPlan: data?.TotalPlan,  
                LastTotalProduction: data?.LastTotalProduction  
            }))  
        }  
    }, [data])  

    useEffect(() => {  
        fetchData()  
        if (filterDate !== undefined) localStorage.setItem('filterDate', JSON.stringify(filterDate))  
    }, [filterDate])  

    return (  
        <DashboardContext.Provider value={{ filterDate, setFilterDate, data, dashboardLoading, fetchData }}>  
            {children}  
        </DashboardContext.Provider>  
    )  
}  

export default DashboardContextProvider  