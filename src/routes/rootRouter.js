const express = require('express')
const  rootRouter = express.Router()
const  { routerLR } = require('./likerRouter')
const { rateRouter } = require('./rateRouter')
const { orderRouter } = require('./orderRouter')

rootRouter.use('/LikeRes',routerLR)
rootRouter.use('/rateRes',rateRouter)
rootRouter.use('/order',orderRouter)

module.exports = rootRouter 