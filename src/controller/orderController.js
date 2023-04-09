const { errorCode, successCode, failCode } = require('../config/response');
const {sequelize} = require('../model/connectSql')
const { initModels } = require('../model/init-models')

const model = initModels(sequelize)

const orderFoodbyUser = async (req, res) => {
      try{
        const {user_id, food_id,amount , code , arr_sub_id} = req.body ;
        const data = {user_id, food_id,amount , code , arr_sub_id}
        const data1 = await model.orderr.findAll({where:{user_id,food_id}})
        if(data1.length > 0)
        {
            errorCode(res,"Something is had at database!","")
        }else {
           value =  await model.orderr.create(data)
            successCode(res,"200Ok",value)
        }
      }catch(err)
      {
        failCode(res,"500 LOI BE")
      }
}

module.exports = {orderFoodbyUser}