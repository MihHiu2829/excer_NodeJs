const express = require('express')
const orderRouter = express.Router()
orderRouter.use(express.json())

const { orderFoodbyUser } = require('../controller/orderController') 

orderRouter.get('/orderFoodbyUser',orderFoodbyUser )

module.exports = {orderRouter}


