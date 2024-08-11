import ProductsModel from '../model/productsModel.js' 
import trycatchHandler from '../config/trycatchHandler.js'
import _ from 'lodash';

const products = trycatchHandler(async (req, res, next) => {  
    const filterValues = ["Section", "Date","TotalEstandard"];  
    const { startDate, endDate } = req.body;  
  
    const data = await ProductsModel.getProducts(startDate, endDate);   
    if (!data.recordset || data.recordset.length === 0) {  
        return res.status(404).send({ GetData: false, title: 'Error', msg: `Get data failed.` });  
    }  
    
    let element = [];  
    data.recordset.forEach((item) => {  
        element.push(_.pick(item, filterValues));  
    });  
    return res.send(element);  
}
); 

export default { products }