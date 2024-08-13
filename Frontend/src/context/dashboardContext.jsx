import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import moment from 'moment-jalaali';  
import axios from "axios";

export const DashboardContext = createContext() 
//********************************************** Language Context ****************************** */
const DashboardContextProvider = ({ children }) => {
    const [filterDate, setFilterDate] = useState('Month');
    const [data, setData] = useState(JSON.parse(localStorage.getItem('production')) ?? {})
    const [dashboardLoading, setDashboardLoading] = useState(true)
    const { backendUrl, headers } = useContext(UserContext);

    function PreviousYear(dateString) {  
        const parts = dateString.split('/')  
        if (parts.length === 3) {  
            const year = parseInt(parts[0]);  
            const month = parts[1];  
            const day = parts[2];  
    
            // کاهش سال  
            const previousYear = year - 1  
    
            return `${previousYear}/${month}/${day}`  
        }  
        
        return null; // اگر فرمت معتبر نبود  
    } 

    //******************************* fetch Productions *******************************
    const fetchData = async () => {
        const yesterdayFormat = moment().subtract(1, 'days')
        const today = moment();

        let dates = {
            startDate: '',
            endDate: '',
            lastStartDate: '',
            lastEndDate:''
        };

        const begin = today.startOf('jMonth').format('jYYYY/jM/jD');  
        const yesterday = yesterdayFormat.format('jYYYY/jM/jD');  

        const formatDateString = (dateStr) => {  
        const parts = dateStr.split('/');  
        const year = parts[0];  
        const month = String(parts[1]).padStart(2, '0'); // اضافه کردن صفر به ابتدای ماه  
        const day = String(parts[2]).padStart(2, '0'); // اضافه کردن صفر به ابتدای روز  
        return `${year}/${month}/${day}`;  
        };  
      
        // ***************** ماه *************************
        const beginningOfMonth = formatDateString(begin);  // شروع ماه جاری
        const yesterdayDate = formatDateString(yesterday); // روز قبل
        const lastYearOfMonth= PreviousYear(beginningOfMonth) // شروع ماه سال قبل
        const lastYearOfyesterdayDate=PreviousYear(yesterdayDate) // روز قبل در سال قبل

        // console.log('1',beginningOfMonth)
        // console.log('2',yesterdayDate)
        // console.log('3',lastYearOfMonth)
        // console.log('4',lastYearOfyesterdayDate)

        if (filterDate === 'Month') {
            dates.startDate = beginningOfMonth
            dates.endDate = yesterdayDate
            dates.lastStartDate = lastYearOfMonth
            dates.lastEndDate = lastYearOfyesterdayDate
        }

        try {
            const response = await axios.post(`${backendUrl}/api/products`, dates, { headers: headers })
            setData(response?.data)
            console.log('1',data)
        } catch (error) {
            // console.error(error)
        } finally {
            setDashboardLoading(false); 
        }
    };

    useEffect(() => {  
        if (data !== undefined) localStorage.setItem('production', JSON.stringify({
            TotalProduction: data?.TotalProduction,
            TotalPlan: data?.TotalPlan,
            LastTotalProduction: data?.LastTotalProduction
        })) 
  
    }, [data]);  

    useEffect(() => {
        fetchData()

    }, [filterDate])



    const DashboardContextValue = {
        filterDate, setFilterDate, data, setData, dashboardLoading, fetchData
    }

    return <DashboardContext.Provider value={DashboardContextValue}>{children}</DashboardContext.Provider>
}
 
export default DashboardContextProvider;
