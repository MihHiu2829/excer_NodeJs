const express = require('express')
const routerLR = express.Router();
routerLR.use(express.json())

const {favoriteResByUser, unfavoriteResByUser ,getListByUser,getListByRes} = require('../controller/like_resController')
routerLR.get('/reactRes',favoriteResByUser);
routerLR.delete('/unreactRes',unfavoriteResByUser);
routerLR.get('/getListByUser',getListByUser);
routerLR.get('/getListByRes',getListByRes);


module.exports = { routerLR } 