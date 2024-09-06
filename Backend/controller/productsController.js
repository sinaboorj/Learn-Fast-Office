import ProductsModel from '../model/productsModel.js' 
import trycatchHandler from '../config/trycatchHandler.js'
import _ from 'lodash';

const products = trycatchHandler(async (req, res, next) => { 
    const filterValues = ["TotalProduction", "TotalPlan", "LastTotalProduction",
        'date1', 'date2', 'date3', 'date4', 'date5', 'date6', 'date7', 'date8', 'date9',
        'date10', 'date11', 'date12', 'lastDate1', 'lastDate2', 'lastDate3', 'lastDate4',
        'lastDate5', 'lastDate6', 'lastDate7', 'lastDate8', 'lastDate9', 'lastDate10', 'lastDate11',
        'lastDate12',
    ]  
    const {
        date1, date2, date3, date4, date5, date6, date7, date8, date9, date10, date11, date12,
        lastDate1, lastDate2, lastDate3, lastDate4, lastDate5, lastDate6, lastDate7, lastDate8,
        lastDate9, lastDate10, lastDate11, lastDate12,
        startDate, endDate, lastStartDate, lastEndDate, searchType
    }=req.body //خواندن از سمت کلاینت 
    if (!startDate || !endDate) {  
        return res.status(400).send({  GetData: false, title:'Error', msg: 'START date and END date are required.'});  
    }  
    
    const totalTB = await ProductsModel.getProducts(  
            [date1, date2, date3, date4, date5, date6, date7, date8, date9, date10, date11, date12],  
            [lastDate1, lastDate2, lastDate3, lastDate4, lastDate5, lastDate6, lastDate7, lastDate8, lastDate9, lastDate10, lastDate11, lastDate12],  
            { startDate, endDate, lastStartDate, lastEndDate },  
            searchType  
    );   //ارسال به تابع

    if (!totalTB) {  
        return res.status(404).send({ GetData: false, title: 'Error', msg: `No data found for the given dates.` });  
    }  
        return res.send(totalTB);  
}
);  
     
  
export default { products }  