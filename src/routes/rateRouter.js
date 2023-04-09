const express = require('express')
const rateRouter = express.Router() 
rateRouter.use(express.json())


const { addRate,getListRateByUser,getListRateByRate } = require('../controller/rate_resController') 

rateRouter.post('/addRate',addRate)
rateRouter.get('/getListRate',getListRateByUser)
rateRouter.get('/getListRateByRate',getListRateByRate)

module.exports = {rateRouter}