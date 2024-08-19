 

const dashFunction = () => {

    //******************************* Previous Month *******************************
    function PreviousMonth(dateString) {
        const parts = dateString.split('/')
        if (parts.length === 3) {
            let year = parseInt(parts[0])
            let month = parseInt(parts[1])
            const day = parts[2]
        
            month -= 1
            
            if (month < 1) {
                month = 12
                year -= 1
            }
         
            const monthStr = month < 10 ? `0${month}` : month
        
            return `${year}/${monthStr}/${day}`
        }
        
        return null
    }

    function PreviousYear(dateString) {
        const parts = dateString.split('/')
        if (parts.length === 3) {
            const year = parseInt(parts[0])
            const month = parts[1]
            const day = parts[2]
            const previousYear = year - 1
    
            return `${previousYear}/${month}/${day}`
        }
        return null // اگر فرمت معتبر نبود  
    }

    const formatDateString = (dateStr) => {
        const parts = dateStr.split('/')
        const year = parts[0]
        const month = String(parts[1]).padStart(2, '0') // اضافه کردن صفر به ابتدای ماه  
        const day = String(parts[2]).padStart(2, '0') // اضافه کردن صفر به ابتدای روز  
        return `${year}/${month}/${day}`
    }
    return { formatDateString, PreviousYear ,PreviousMonth}
} 

export default dashFunction 