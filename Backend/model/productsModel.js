import { poolPromise } from '../config/sqlConnection.js';  
import moment from 'moment-jalaali'

class ProductsModel {

    static getProducts = async (dateParams, lastDateParams, dateRanges, searchType) => {
        console.clear()
        function formatNumber(num) {
            return num < 10 ? `0${num}` : num; // اگر عدد کمتر از 10 باشد، با صفر پر کند  
        }

        function getLastDayOfShamsiDate(dateString) {
            const [yearStr, monthStr] = dateString.split('/');
            const year = parseInt(yearStr);
            const month = parseInt(monthStr);
        
            // تعداد روزهای هر ماه در سال شمسی (6 ماه اول 31 روزه، 6 ماه بعد 30 روزه)  
            const daysInMonth = [0, 31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30]; // 0-indexed, 12 ماه  
        
            // تاریخ آخرین روز ماه  
            const lastDay = daysInMonth[month];
         
            // برگرداندن تاریخ به صورت رشته 10 کاراکتری  
            return `${year}/${formatNumber(month)}/${formatNumber(lastDay)}`;
        } 

        function getEndOfYear(inputDate) {  
            // تبدیل تاریخ ورودی به شیء moment  
            const date = moment(inputDate, 'jYYYY/jMM/jDD'); // برای تاریخهای تقویم جلالی  
            // برگرداندن تاریخ بصورت فرمت مورد نظر  
            return date.format('jYYYY/12/30'); // می‌توانید فرمت دلخواه خود را تغییر دهید  
        } 

        try {
            const pool = await poolPromise; 
            const request = pool.request();

            request.input('startDate', dateRanges.startDate);
            request.input('endDate', dateRanges.endDate);
            request.input('lastStartDate', dateRanges.lastStartDate);
            request.input('lastEndDate', dateRanges.lastEndDate);
 
            dateParams.forEach((date, index) => {
                request.input(`date${index + 1}`, date)
                if (searchType === 'Month') { request.input(`end_A${index + 1}`, getLastDayOfShamsiDate(date)) }
                if (searchType === 'Year') { request.input(`end_L${index + 1}`, getEndOfYear(date)) }
                console.log(`end_L${index + 1}`, getEndOfYear(date))
            })
 
            lastDateParams.forEach((date, index) => {
                request.input(`lastDate${index + 1}`, date)
                if (searchType === 'Month') { request.input(`end_B${index + 1}`, getLastDayOfShamsiDate(date)) }
            })

            const currentResult = await request.query(`  
                SELECT   
                    (SELECT SUM(Estandard) FROM tb_Produce WHERE [Date] BETWEEN @startDate AND @endDate) AS TotalProduction,  
                    (SELECT SUM(Ton) FROM tb_DayProgram WHERE [Date] BETWEEN @startDate AND @endDate) AS TotalPlan  
            `);
            
            const lastResult = await request.query(`  
                SELECT SUM(Estandard) AS LastTotalProduction   
                FROM tb_Produce   
                WHERE [Date] BETWEEN @lastStartDate AND @lastEndDate   
            `);
     
            const result = {
                TotalProduction: currentResult.recordset[0]?.TotalProduction || 0,
                TotalPlan: currentResult.recordset[0]?.TotalPlan || 0,
                LastTotalProduction: lastResult.recordset[0]?.LastTotalProduction || 0,
            };


            /* ******************************* Day ************************************************** */

            if (searchType === 'Day') {
                for (let i = 0; i < dateParams.length; i++) {
                    const dailyResult = await request.query(`  
                        SELECT SUM(Estandard) AS tolid   
                        FROM tb_Produce   
                        WHERE [Date] BETWEEN @date${i + 1} AND @date${i + 1}  
                    `);
                    result[`dateToken${i + 1}`] = Math.round((dailyResult.recordset[0]?.tolid) / 1000) || 0
                }

                //     for (let i = 0; i < lastDateParams.length; i++) { //12 روز سال قبل 
                //         const dailyResult = await request.query(`  
                //             SELECT SUM(Estandard) AS lastTolid   
                //             FROM tb_Produce   
                //             WHERE [Date] BETWEEN @lastDate${i + 1} AND @lastDate${i + 1}  
                //         `);
                //         result[`dateToken${i + 12 + 1}`] = Math.round((dailyResult.recordset[0]?.lastTolid) / 1000) || 0
                //     }
            
            }

            /* ******************************* Month ************************************************** */

            if (searchType === 'Month') {
                for (let i = 0; i < dateParams.length; i++) {
                    const dailyResult = await request.query(`  
            SELECT SUM(Estandard) AS tolid   
            FROM tb_Produce   
            WHERE [Date] BETWEEN @date${i + 1} AND @end_A${i + 1}  
           `)
                    result[`dateToken${i + 1}`] = Math.round((dailyResult.recordset[0]?.tolid) / 1000) || 0
                }

                for (let i = 0; i < lastDateParams.length; i++) {
                    const dailyResult = await request.query(`  
            SELECT SUM(Estandard) AS lastTolid   
            FROM tb_Produce   
            WHERE [Date] BETWEEN @lastDate${i + 1} AND @end_B${i + 1}  
            `)
                    result[`dateToken${i + 12 + 1}`] = Math.round((dailyResult.recordset[0]?.lastTolid) / 1000) || 0
                }
            }

            /* ******************************* Year ************************************************** */

            if (searchType === 'Year') {
                for (let i = 0; i < dateParams.length; i++) {
                    const dailyResult = await request.query(`  
                        SELECT SUM(Estandard) AS tolid   
                        FROM tb_Produce   
                        WHERE [Date] BETWEEN @date${i + 1} AND @end_L${i + 1}  
                    `);
                    result[`dateToken${i + 1}`] = Math.round((dailyResult.recordset[0]?.tolid) / 1000) || 0
                }
            }

            /* ******************************* Return ************************************************** */
            console.log(dateParams)
            console.log(result)

            return result
 
        } catch (err) {
            console.error('Error in Query: getProduceData', err)
            throw err
        }
    }
}

export default ProductsModel;   

