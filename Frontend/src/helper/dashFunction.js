import moment from 'moment-jalaali'  

const dashFunction = ({  customStartDate,custemEndDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate }) => {

    const PreviousMonth = (dateString) => {
        const parts = dateString.split('/')
        if (parts.length === 3) {
            let year = parseInt(parts[0])
            let month = parseInt(parts[1]) - 1
            const day = parts[2]
            
            if (month < 1) { month = 12; year -= 1 }
            
            const monthStr = month < 10 ? `0${month}` : month
            return `${year}/${monthStr}/${day}`
        }
        return null
    }

    const PreviousYear = (dateString) => {
        const parts = dateString.split('/')
        if (parts.length === 3) {
            const year = parseInt(parts[0]) - 1
            const month = parts[1]
            const day = parts[2]
            return `${year}/${month}/${day}`
        }
        return null
    }

    const formatDateString = (dateStr) => {
        const parts = dateStr.split('/')
        return `${parts[0]}/${String(parts[1]).padStart(2, '0')}/${String(parts[2]).padStart(2, '0')}`
    }
    
    const seperatorNumber=(num)=> {  
        if (num < 1000) {  
            return num.toString();  
        }  
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
    }  

    const filterDateFunction = (filterDate) => {
        const today = moment()
        const yesterday = today.clone().subtract(1, 'days')
        let twoDaysAgo = today.clone().subtract(2, 'days');
      
        const startOfYear = moment(`${today.jYear()}/01/01`, 'jYYYY/jMM/jDD')
        const beginningOfMonth = formatDateString(today.startOf('jMonth').format('jYYYY/jM/jD'))
        const theDayBefore = formatDateString(yesterday.format('jYYYY/jM/jD'))
        twoDaysAgo = formatDateString(twoDaysAgo.format('jYYYY/jM/jD'))
        
        switch (filterDate) {
            case 'Day':
                setStartDate(theDayBefore)
                setEndDate(theDayBefore)
                setLastStartDate(twoDaysAgo)
                setLastEndDate(twoDaysAgo)
                break
            case 'Month':
                setStartDate(beginningOfMonth)
                setEndDate(theDayBefore)
                setLastStartDate(PreviousMonth(beginningOfMonth))
                setLastEndDate(PreviousMonth(theDayBefore))
                break
            case 'Year':
                setStartDate(startOfYear.format('jYYYY/jMM/jDD'))
                setEndDate(theDayBefore)
                setLastStartDate(PreviousYear(startOfYear.format('jYYYY/jMM/jDD')))
                setLastEndDate(PreviousYear(theDayBefore))
                break
            case 'Custom':
                setStartDate(customStartDate)
                setEndDate(custemEndDate)
                setLastStartDate(PreviousYear(customStartDate))
                setLastEndDate(PreviousYear(custemEndDate))
                break
            default:
                break
        }
    }

    return { filterDateFunction, seperatorNumber }
} 

export default dashFunction  