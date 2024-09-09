import moment from 'moment-jalaali'  

const dashFunction = ({ dates, setDates, customStartDate,custemEndDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate }) => {

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

    /* ******************************* Get 12 Day **************************************** */
    const get12Days = (theDayBefore, day) => {  
        const date = moment(theDayBefore, 'jYYYY/jMM/jDD');  

        const newDates = {};  
        const lastYearDates = {};  

        // شامل کردن تاریخ ورودی به عنوان تاریخ اول  
        newDates[`date1`] = date.format('jYYYY/jMM/jDD');  
        lastYearDates[`lastDate1`] = date.clone().subtract(1,'year').add(1, 'days').format('jYYYY/jMM/jDD');  
        for (let i = 1; i <= 11; i++) {  
            const previousDate = date.clone().subtract(i, 'days');  
            const lastYearDate = previousDate.clone().subtract(1, 'years');  

            newDates[`date${i + 1}`] = previousDate.format('jYYYY/jMM/jDD');  
            lastYearDates[`lastDate${i + 1}`] = lastYearDate.add(1, 'days').format('jYYYY/jMM/jDD');  
        }  
      
            return setDates({
                ...newDates,
                ...lastYearDates,
                startDate: theDayBefore,
                endDate: theDayBefore,
                lastStartDate: newDates['date2'],
                lastEndDate: newDates['date2'],
                searchType: day //مشخص کردن نوع جستجو برای سمت سرور
            });
    };

    /* ******************************* Get 12 Month **************************************** */  
    const get12Months = (theDayBefore, month,startDate, lastStartDate, lastEndDate) => {  
        const date = moment(theDayBefore, 'jYYYY/jMM/jDD');  
    
        const newDates = {};  
        const lastYearDates = {}; 
        
        let day = theDayBefore.split('/')
        const fixedDay = day[2]; // استخراج روز ثابت   
    
        for (let i = 0; i < 12; i++) {  
            // تنظیم ماه و روز ثابت  
            const previousDate = moment(date).subtract(i, 'months');   
            const lastYearDate = previousDate.clone().subtract(1, 'years');  
    
            newDates[`date${i + 1}`] = previousDate.format(`jYYYY/jMM/${fixedDay}`);  
            lastYearDates[`lastDate${i + 1}`] = lastYearDate.format(`jYYYY/jMM/${fixedDay}`);  
        }  
         
        return setDates({  
            ...newDates,  
            ...lastYearDates,  
            startDate: startDate,  
            endDate: theDayBefore,  
            lastStartDate: lastStartDate,  
            lastEndDate: lastEndDate,  
            searchType: month // مشخص کردن نوع جستجو برای سمت سرور  
        });  
    };  

/* ************************** filterDateFunction *************************************** */
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
                get12Days(theDayBefore, 'Day')
                break
            case 'Month':
                get12Months(theDayBefore, 'Month',beginningOfMonth,PreviousMonth(beginningOfMonth),PreviousMonth(theDayBefore))
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

