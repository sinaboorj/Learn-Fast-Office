import ProductsModel from '../model/productsModel.js' 
import trycatchHandler from '../config/trycatchHandler.js'
import _ from 'lodash';

const products = trycatchHandler(async (req, res, next) => { 
    const filterValues = ["TotalProduction", "TotalPlan","LastTotalProduction","startDate","endDate"]; 
    const { startDate, endDate, lastStartDate, lastEndDate} = req.body;  
   
    if (!startDate || !endDate) {  
        return res.status(400).send({  GetData: false, title:'Error', msg: 'START date and END date are required.'});  
    }  
    
    const totalTB = await ProductsModel.getProducts(startDate, endDate, lastStartDate, lastEndDate);   
    console.clear() 
    console.log(totalTB) 
    if (!totalTB) {  
        return res.status(404).send({ GetData: false, title: 'Error', msg: `No data found for the given dates.` });  
    }  
        return res.send(totalTB);  
}
);  
 
  
export default { products } 