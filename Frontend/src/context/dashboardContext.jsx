import { createContext, useEffect, useState } from "react"  
import axios from "axios"  

import moment from 'moment-jalaali'  
import { Alert } from "bootstrap"
import dashboardFunction from "../helper/dashboardFunction"

export const DashboardContext = createContext()  

const DashboardContextProvider = ({ children }) => {
    const [filterDate, setFilterDate] = useState(JSON.parse(localStorage.getItem('filterDate')) ?? 'Day')
    const [data, setData] = useState(JSON.parse(localStorage.getItem('production')) ?? {})
    const [dashboardLoading, setDashboardLoading] = useState(true)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [lastStartDate, setLastStartDate] = useState('')
    const [lastEndDate, setLastEndDate] = useState('')
    const [selectedOptionCombo, setSelectedOptionCombo] = useState('')
    const [previousDates, setPreviousDates] = useState({ startDate: '', endDate: '' })
    const [customStartDate, setCustomStartDate] = useState("");
    const [custemEndDate, setCustomEndDate] = useState("");
    const [submitCustomDate, setSubmitCustomDate] = useState(false);
    const [dates, setDates] = useState({
        date1: '', date2: '', date3: '', date4: '', date5: '', date6: '', date7: '', date8: '', date9: '', date10: '', date11: '', date12: '',
        lastDate1: '', lastDate2: '', lastDate3: '', lastDate4: '', lastDate5: '', lastDate6: '', lastDate7: '', lastDate8: '', lastDate9: '', lastDate10: '', lastDate11: '', lastDate12: '',
        startDate: '', endDate: '', lastStartDate: '', lastEndDate: '', searchType: ''
    })

    const { filterDateFunction } = dashboardFunction({ dates, setDates, customStartDate, custemEndDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate })

    const backendUrl = 'http://localhost:3000'

    const fetchData = async () => {
        const tempDate = {
            date1: dates?.date1, date2: dates?.date2, date3: dates?.date3, date4: dates?.date4, date5: dates?.date5, date6: dates?.date6, date7: dates?.date7, date8: dates?.date8, date9: dates?.date9, date10: dates?.date10, date11: dates?.date11, date12: dates?.date12,
            lastDate1: dates?.lastDate1, lastDate2: dates?.lastDate2, lastDate3: dates?.lastDate3, lastDate4: dates?.lastDate4, lastDate5: dates?.lastDate5, lastDate6: dates?.lastDate6, lastDate7: dates?.lastDate7, lastDate8: dates?.lastDate8, lastDate9: dates?.lastDate9, lastDate10: dates?.lastDate10, lastDate11: dates?.lastDate11, lastDate12: dates?.lastDate12,
            startDate: dates?.startDate, endDate: dates?.endDate, lastStartDate: dates?.lastStartDate, lastEndDate: dates?.lastEndDate, searchType: dates?.searchType
        }

        setDashboardLoading(true)
        try {
            if (dates.startDate && dates.endDate && dates?.lastStartDate && dates?.lastEndDate) {
                const response = await axios.post(`${backendUrl}/api/products`, tempDate)
                if (response?.data && Object.keys(response?.data).length > 0) {
                    setData(response?.data)
                    localStorage.setItem('production', JSON.stringify({
                        TotalProduction: response.data?.TotalProduction,
                        TotalPlan: response.data?.TotalPlan,
                        LastTotalProduction: response.data?.LastTotalProduction,
                        dateToken1: response.data?.dateToken1,
                        dateToken2: response.data?.dateToken2,
                        dateToken3: response.data?.dateToken3,
                        dateToken4: response.data?.dateToken4,
                        dateToken5: response.data?.dateToken5,
                        dateToken6: response.data?.dateToken6,
                        dateToken7: response.data?.dateToken7,
                        dateToken8: response.data?.dateToken8,
                        dateToken9: response.data?.dateToken9,
                        dateToken10: response.data?.dateToken10,
                        dateToken11: response.data?.dateToken11,
                        dateToken12: response.data?.dateToken12,
                        dateToken13: response.data?.dateToken13,
                        dateToken14: response.data?.dateToken14,
                        dateToken15: response.data?.dateToken15,
                        dateToken16: response.data?.dateToken16,
                        dateToken17: response.data?.dateToken18,
                        dateToken18: response.data?.dateToken18,
                        dateToken19: response.data?.dateToken19,
                        dateToken20: response.data?.dateToken20,
                        dateToken21: response.data?.dateToken21,
                        dateToken22: response.data?.dateToken22,
                        dateToken23: response.data?.dateToken23,
                        dateToken24: response.data?.dateToken24,
                    }))
                } else {
                    Alert("داده ای واکشی نشد. مجددا تلاش کنید");  // نمایش پیام خطا  
                }
            }
            if (!data) {
                localStorage.setItem('production', JSON.stringify({}))
                Alert("داده ای واکشی نشد. مجددا تلاش کنید"); 
            }
        } catch (error) {
            console.error(error)
        } finally {
            setDashboardLoading(false)
        }
    }

    useEffect(() => {
        const currentDate = moment().format('jYYYY/jM/jD')
        const lastCheckedDate = localStorage.getItem('lastCheckedDate')
        if (currentDate !== lastCheckedDate) {
            localStorage.setItem('lastCheckedDate', currentDate)
            filterDateFunction(filterDate)
            fetchData()
        }
        localStorage.setItem('filterDate', JSON.stringify(filterDate))
    }, [])

    useEffect(() => {
        filterDateFunction(filterDate)
        if (startDate !== previousDates?.startDate || endDate !== previousDates?.endDate) {
            fetchData()
            setPreviousDates({ startDate, endDate })
        }
        localStorage.setItem('filterDate', JSON.stringify(filterDate))
       
    }, [filterDate, dates?.startDate, dates?.endDate, dates?.lastStartDate, dates?.lastEndDate])

    useEffect(() => {
        fetchData();
    }, [dates]);

    useEffect(() => {
        const checkDateChange = () => {
            const currentDate = moment().format('jYYYY/jM/jD')
            const lastCheckedDate = localStorage.getItem('lastCheckedDate')
            if (currentDate !== lastCheckedDate) {
                localStorage.setItem('lastCheckedDate', currentDate)
                window.location.reload()
            }
        }

        const intervalId = setInterval(checkDateChange, 60000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <DashboardContext.Provider
            value={{
                filterDate, setFilterDate, data, dashboardLoading, startDate, endDate,
                setStartDate, setEndDate, setLastStartDate, setLastEndDate,
                lastStartDate, lastEndDate, fetchData, customStartDate, setCustomStartDate,
                custemEndDate, setCustomEndDate, submitCustomDate, setSubmitCustomDate,
                dates, setDates, selectedOptionCombo, setSelectedOptionCombo
            }}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardContextProvider  

