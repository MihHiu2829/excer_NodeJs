const { Sequelize } = require('sequelize')
const config = require('../config/config')

// const sequelize = new Sequelize("config","root","1234",{
//     dialect: "mysql",
//     port: 3306,
//     host: "localhost",
//     define: {
//         timestamps: false 
//     }
// })

const sequelize = new Sequelize(config.database,config.userName,config.pass,{
    dialect: config.dialect,
    port: config.port,
    host: config.host,
    define: {
        timestamps: false 
    }
})


module.exports = {sequelize} 