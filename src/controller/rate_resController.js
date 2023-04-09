const { failCode, successCode } = require('../config/response');
const {sequelize} = require('../model/connectSql')
const {initModels} = require('../model/init-models')
const model = initModels(sequelize) ;

const addRate = async (req,res) => {
    try{
        const {user_id , res_id ,amount} = req.body ;
        const valueTmp = await model.rate_res.findAll({where:{user_id, res_id}})
        if(valueTmp.length > 0) 
        {
            errorCode(res,"Something went wrong!",valueTmp)
            return ; 
        }else {
            let date_rate = new Date();
            const value =  {user_id , res_id ,amount, date_rate}
            const data = await model.rate_res.create(value)
            successCode(res,"Okk",data)
        }
    }catch(err)
    {   
        failCode(res,"Loi BE")
    }
}

const getListRateByUser = async (req, res ) => {
    try{
        let {user_id} = req.body
        const valueTmp = await model.rate_res.findAll({where: {user_id}},{include: ['re','user']})
        successCode(res,"OKK" ,valueTmp)
    }catch(err)
    {   
        failCode(res,"Loi BE")
    }
}
const getListRateByRate = async (req, res ) => {
    try{


        let {res_id} = req.body
        const data = await model.rate_res.findAll({where: {res_id}},{include: ['re','user']})
        successCode(res,"OKK" ,data)

    }catch(err)
    {   
        failCode(res,"Loi BE")
    }
}


module.exports = {addRate , getListRateByUser, getListRateByRate}
