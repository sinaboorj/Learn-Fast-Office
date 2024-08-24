import { createContext, useEffect, useState } from "react"  
import axios from "axios"  
import dashFunction from "../helper/dashFunction"  
import moment from 'moment-jalaali'  

export const DashboardContext = createContext()  

const DashboardContextProvider = ({ children }) => {
    const [filterDate, setFilterDate] = useState(JSON.parse(localStorage.getItem('filterDate')) ?? 'Month')
    const [data, setData] = useState(JSON.parse(localStorage.getItem('production')) ?? {})
    const [dashboardLoading, setDashboardLoading] = useState(true)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [lastStartDate, setLastStartDate] = useState('')
    const [lastEndDate, setLastEndDate] = useState('')
  
    const { filterDateFunction } = dashFunction({ setStartDate, setEndDate, setLastStartDate, setLastEndDate })

    const backendUrl = 'http://localhost:3000'

    const fetchData = async () => {
        const dates = { startDate, endDate, lastStartDate, lastEndDate }
        
        setDashboardLoading(true)
        try {
            if (startDate !== '' && endDate !== '' && lastStartDate !== '' && lastEndDate !== '') {
                const response = await axios.post(`${backendUrl}/api/products`, dates)
                setData(response.data)
                localStorage.setItem('production', JSON.stringify({
                    TotalProduction: response.data?.TotalProduction,
                    TotalPlan: response.data?.TotalPlan,
                    LastTotalProduction: response.data?.LastTotalProduction
                }))
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
        fetchData()
        localStorage.setItem('filterDate', JSON.stringify(filterDate))
    }, [filterDate, startDate, endDate, lastStartDate, lastEndDate])


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
                lastStartDate, lastEndDate
            }}>
            {children}
        </DashboardContext.Provider>
    )
} 

export default DashboardContextProvider  
