import ProductsModel from '../model/productsModel.js' 
import trycatchHandler from '../config/trycatchHandler.js'
import _ from 'lodash';

const products = trycatchHandler(async (req, res, next) => { 
    const filterValues = ["TotalProduction", "TotalPlan","LastTotalProduction"]; 
    const { startDate, endDate, lastStartDate, lastEndDate} = req.body;  
   
    if (!startDate || !endDate) {  
        return res.status(400).send({  GetData: false, title:'Error', msg: 'START date and END date are required.'});  
    }  

    const totalTB = await ProductsModel.getProducts(startDate, endDate, lastStartDate, lastEndDate);   
 
    if (!totalTB) {  
        return res.status(404).send({ GetData: false, title: 'Error', msg: `No data found for the given dates.` });  
    }  

        return res.send(_.pick(totalTB, filterValues));  
}
);  
 
  
export default { products } 