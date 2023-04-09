const { failCode, successCode, errorCode } = require('../config/response');
const { initModels } = require('../model/init-models')
const { sequelize } = require('../model/connectSql')
const model =  initModels(sequelize) ;

// like
const favoriteResByUser = async (req,res) => {
    try{
        const data = req.body;  
        const date_like = Date.now();
        const { user_id, res_id  } = data;
        const value = { user_id, res_id, date_like }
        const s1  = await model.like_res.findAll({where: {
             user_id 
        }})
        let user_idArray = s1.map((e) => {
           return e.res_id
        })
       let isHad =  user_idArray.filter((a) => {
            if(a == value.res_id)
                return false;
        })
        if(!isHad) {
            errorCode(res,"Have like!",value)}
        else {
            let v1 = await model.like_res.create(value)
            successCode(res,"liked",v1)
        }
    }catch(err)
    {
        failCode(res,"Loi Be")
    } }

const unfavoriteResByUser = async (req,res) => {
    try{
        const data = req.body;  
        const { user_id, res_id } = data;
        const ishave = await model.like_res.findOne({where: {res_id: res_id , user_id: user_id}})
        if(ishave.user_id > 0)
        {
            await model.like_res.destroy({where: {res_id: res_id, user_id: user_id}})
            successCode(res,"Ok",data);
        }else errorCode(res,"Something went wrong?",data)
    }catch(err)
    {
        failCode(res,"Loi BE")
    }
}
const getListByUser = async (req,res) => {
    try{
        const {user_id} = req.body;
        const list = await model.like_res.findAll({ 
            where:{user_id},
            include: ['re']
        })
        successCode(res,"OKK",list)

    }catch(err)
    {
        failCode(res,"LOI BE")
    }
}
const getListByRes = async (req,res) => {
    try{
        const {res_id} = req.body;
        const list = await model.like_res.findAll({ 
            where:{res_id},
            include: ['user']
        })
        if(list.length < 0)
        {
            errorCode(res,"Something went wrong!",res_id)
        }else
        successCode(res,"OKK",list)
    }catch(err)
    {
        failCode(res,"LOI BE")
    }
}



module.exports = {favoriteResByUser,unfavoriteResByUser,getListByUser ,getListByRes}