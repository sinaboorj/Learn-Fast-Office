import express from 'express';  
import produceController from '../controller/productsController.js'  

const productRouter = express.Router()  

productRouter.post('/products', produceController.products)  

export default productRouter 