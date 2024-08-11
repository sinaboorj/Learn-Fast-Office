import sql from 'mssql';  
import dotenv from 'dotenv';  

dotenv.config();  

const sqlConfig = {  
    user: process.env.DB_SQL_USERNAME,  
    password: process.env.DB_SQL_PASSWORD,  
    database: process.env.DB_SQL_DATABASE,  
    server: process.env.DB_SQL_HOST,  
    options: {  
        encrypt: false,  
    },  
};  

const poolPromise = new sql.ConnectionPool(sqlConfig).connect()  
    .then(pool => {  
        console.log(`Connected to pool `);  
        return pool;  
    })  
    .catch(err => {  
        console.error('Error:', err);  
    });  

export { poolPromise };  