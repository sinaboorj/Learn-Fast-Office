import { poolPromise } from '../config/sqlConnection.js';  

class ProductsModel {

    static getProducts = async (startDate, endDate, lastStartDate, lastEndDate) => {
        try {
            const pool = await poolPromise;
            const request = pool.request();

            request.input('startDate', startDate);
            request.input('endDate', endDate);
            request.input('lastStartDate', lastStartDate);
            request.input('lastEndDate', lastEndDate);

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

            if (currentResult.recordset.length > 0 && lastResult.recordset.length > 0) {
                const result = {
                    TotalProduction: currentResult.recordset[0].TotalProduction,
                    TotalPlan: currentResult.recordset[0].TotalPlan,
                    LastTotalProduction: lastResult.recordset[0].LastTotalProduction,
                }
                return result
            } else {  
                throw new Error('No data found');  
            }  
            
        } catch (err) {
            console.error('Error in Query: getProduceData', err);
            throw err;
        }
    }
}

export default ProductsModel;   
