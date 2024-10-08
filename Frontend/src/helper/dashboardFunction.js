import moment from 'moment-jalaali'  

const dashboardFunction = ({ dates, setDates, customStartDate, custemEndDate, setStartDate, setEndDate, setLastStartDate, setLastEndDate }) => {

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

    function formatMonth(month) {
        return month.toString().padStart(2, '0');
    }

    const formatDateString = (dateStr) => {
        const parts = dateStr.split('/')
        return `${parts[0]}/${String(parts[1]).padStart(2, '0')}/${String(parts[2]).padStart(2, '0')}`
    }
    
    const seperatorNumber = (num) => {
        if (num < 1000) {
            return num.toString()
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    /* ******************************* Get 12 Day **************************************** */
    const get12Days = (theDayBefore, day) => {
        const date = moment(theDayBefore, 'jYYYY/jMM/jDD')

        const newDates = {};
        const lastYearDates = {};

        // شامل کردن تاریخ ورودی به عنوان تاریخ اول  
        newDates[`date1`] = date.format('jYYYY/jMM/jDD')
        lastYearDates[`lastDate1`] = date.clone().subtract(1, 'year').add(1, 'days').format('jYYYY/jMM/jDD')
        for (let i = 1; i <= 11; i++) {
            const previousDate = date.clone().subtract(i, 'days')
            const lastYearDate = previousDate.clone().subtract(1, 'years')

            newDates[`date${i + 1}`] = previousDate.format('jYYYY/jMM/jDD')
            lastYearDates[`lastDate${i + 1}`] = lastYearDate.add(1, 'days').format('jYYYY/jMM/jDD')
        }

        return setDates({
            ...newDates,
            ...lastYearDates,
            startDate: theDayBefore,
            endDate: theDayBefore,
            lastStartDate: newDates['date2'],
            lastEndDate: newDates['date2'],
            searchType: day //مشخص کردن نوع جستجو برای سمت سرور
        })
    };

    /* ******************************* Get 12 Month **************************************** */
      
    const get12Months = (theDayBefore, month, startDate, lastStartDate, lastEndDate) => {
        const date = moment(theDayBefore, 'jYYYY/jMM/jDD')
        const newDates = {};
        const lastYearDates = {};
        
        let D = (date.clone().startOf('jYear').add(3, 'days').subtract(1, 'months').startOf('jMonth')).format('jYYYY/jMM/jDD')
        D = moment(D, 'jYYYY/jMM/jDD')

        // تعداد ماه هایی که باید صفر شوند
        const remainingMonths = 12 - date.jMonth() - 1;
        
        //تعداد ماه هایی که باید داده بگیرند
        let counter = ((date.clone()).format('jYYYY/jMM/01')).split('/');
        const initialDate = counter
        let downCounterMonth = counter[1]
        counter = parseInt(counter[1])
        
        // 0 کردن ماه‌های باقی‌مانده تا پایان سال  
        for (let i = 1; i <= remainingMonths; i++) {
            newDates[`date${i}`] = "0000/00/00";
        }

        // ماه هایی که تاریخ را به صورت صعودی میگیرند
        for (let i = 1; i < counter; i++) {
            downCounterMonth = parseInt(downCounterMonth) - 1
            newDates[`date${remainingMonths + 1 + i}`] = initialDate[0] + '/' + formatMonth(downCounterMonth) + '/' + initialDate[2]
        }

        // تاریخ ابتدایی ماه جاری  
        newDates[`date${remainingMonths + 1}`] = date.clone().startOf('jMonth').format('jYYYY/jMM/jDD')

        // محاسبه برای ماه‌های قبل در سال قبل
        for (let i = 0; i < 12; i++) {
            const startOfMonth = moment(D).add(3, 'days').subtract(i, 'months').startOf('jMonth')
            lastYearDates[`lastDate${i + 1}`] = startOfMonth.format('jYYYY/jMM/jDD')
        }
        
        return setDates({
            ...newDates,
            ...lastYearDates,
            startDate: startDate,
            endDate: theDayBefore,
            lastStartDate: lastStartDate,
            lastEndDate: lastEndDate,
            searchType: month // مشخص کردن نوع جستجو برای سمت سرور  
        })
    }

    /* ******************************* Get 12 Year **************************************** */ 
    
    const get12Years = (theDayBefore, year, startOfYear, lastStartDate, lastEndDate) => {  
        const date = moment(theDayBefore, 'jYYYY/jMM/jDD');  
        const newDates = {};  
        const lastYearDates = {};
        // تاریخ ابتدای سال جاری را به newDates اضافه کنید  
        const startOfCurrentYear = date.clone().startOf('jYear'); // ابتدای سال جاری  
        for (let i = 1; i <= 12; i++) {  
            const yearStartDate = date.clone().subtract(i, 'years').startOf('jYear'); // تاریخ ابتدای 11 سال قبل  
            newDates[`date${i+1}`] = yearStartDate.format('jYYYY/jMM/jDD'); 
            lastYearDates[`lastDate${i + 1}`] = '0000/00/00'
        }  
    
        newDates[`date1`] = (date.clone().startOf('jYear')).format('jYYYY/jMM/jDD')
        //lastYearDates=newDates;

        return setDates({  
            ...newDates, 
            ...lastYearDates,
            startDate: startOfYear,  
            endDate: theDayBefore,  
            lastStartDate: lastStartDate,  
            lastEndDate: lastEndDate,  
            searchType: year // مشخص کردن نوع جستجو برای سمت سرور  
        });  
    }

    /* ************************** filterDateFunction *************************************** */
    const filterDateFunction = (filterDate) => {
        const today = moment()
        const yesterday = today.clone().subtract(1, 'days')
        let twoDaysAgo = ''
      
        const startOfYear = formatDateString((yesterday.clone().startOf('jYear')).format('jYYYY/jM/jD'))
        const beginningOfMonth = formatDateString((yesterday.startOf('jMonth')).format('jYYYY/jM/jD'))
        const theDayBefore = formatDateString((today.clone().subtract(1, 'days')).format('jYYYY/jM/jD'))
        twoDaysAgo = formatDateString((today.clone().subtract(2, 'days')).format('jYYYY/jM/jD'))

        switch (filterDate) {
            case 'Day':
                get12Days(theDayBefore, 'Day')
                break
            case 'Month':
                get12Months(theDayBefore, 'Month', beginningOfMonth, PreviousMonth(beginningOfMonth), PreviousMonth(theDayBefore))
                break
            case 'Year':
                get12Years(theDayBefore , 'Year', startOfYear , PreviousYear(startOfYear), PreviousYear(theDayBefore))
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

export default dashboardFunction  



