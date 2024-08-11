import express from 'express';  
import produceController from '../controller/productsController.js'  
import authorization from '../middelwares/authorization.js'

const productRouter = express.Router()  

productRouter.post('/products', authorization, produceController.products)  

export default productRouter 