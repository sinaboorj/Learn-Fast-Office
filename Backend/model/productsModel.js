import { poolPromise } from '../config/sqlConnection.js';  

class ProductsModel {

    static getProducts = async (startDate, endDate) => {  
        try {  
            const pool = await poolPromise;  
            const request = pool.request();  

            // تعریف پارامترها به همراه نام  
            request.input('startDate', startDate);  
            request.input('endDate', endDate);  

            const result = await request.query(`  
                SELECT   
                Section, [Date], SUM(Estandard) AS TotalEstandard  
                FROM tb_Produce  
                WHERE ([Date] BETWEEN @startDate AND @endDate)  
                GROUP BY ROLLUP(Section, [Date])  
            `);   
            console.log(result)
            return result; // تنها داده‌ها را برمی‌گرداند 
        } catch (err) {  
            console.error('Error in getProduceData:', err);  
            throw err;  
        }  
    }  
}  

export default ProductsModel;   
