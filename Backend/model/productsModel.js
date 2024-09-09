import { poolPromise } from '../config/sqlConnection.js';  

class ProductsModel {

    static getProducts = async (dateParams, lastDateParams, dateRanges, searchType) => {
        
        function getFirstDayOfMonth(shamsiDate) {  // برگرداندن ابتدای ماه  
            const [year, month] = shamsiDate.split('/').map(Number);  
            const formattedMonth = String(month).padStart(2, '0'); // فرمت کردن ماه  
            return `${year}/${formattedMonth}/01`;  
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
                if (searchType === 'Month') { request.input(`start_A${index + 1}`, getFirstDayOfMonth(date)) }
            })

            lastDateParams.forEach((date, index) => {
                request.input(`lastDate${index + 1}`, date)
                if (searchType === 'Month') { request.input(`start_B${index + 1}`, getFirstDayOfMonth(date)) }
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

                for (let i = 0; i < lastDateParams.length; i++) {
                    const dailyResult = await request.query(`  
                        SELECT SUM(Estandard) AS lastTolid   
                        FROM tb_Produce   
                        WHERE [Date] BETWEEN @lastDate${i + 1} AND @lastDate${i + 1}  
                    `);
                    result[`dateToken${i + 12 + 1}`] = Math.round((dailyResult.recordset[0]?.lastTolid) / 1000) || 0
                }
            }

            /* ******************************* Month ************************************************** */

            if (searchType === 'Month') {
                 
                for (let i = 0; i < dateParams.length; i++) {
                    const dailyResult = await request.query(`  
            SELECT SUM(Estandard) AS tolid   
            FROM tb_Produce   
            WHERE [Date] BETWEEN @start_A${i + 1} AND @date${i + 1}  
           `)
                    result[`dateToken${i + 1}`] = Math.round((dailyResult.recordset[0]?.tolid) / 1000) || 0
                }

                for (let i = 0; i < lastDateParams.length; i++) {
                    const dailyResult = await request.query(`  
            SELECT SUM(Estandard) AS lastTolid   
            FROM tb_Produce   
            WHERE [Date] BETWEEN @start_B${i + 1} AND @lastDate${i + 1}  
            `)
                    result[`dateToken${i + 12 + 1}`] = Math.round((dailyResult.recordset[0]?.lastTolid) / 1000) || 0
                }
            }

            return result

        } catch (err) {
            console.error('Error in Query: getProduceData', err)
            throw err
        }
    }
}

export default ProductsModel;  

