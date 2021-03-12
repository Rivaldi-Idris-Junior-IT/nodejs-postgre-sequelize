const Sequelize = require('sequelize');
const fs = require('fs');
require('dotenv').config()
const db = new Sequelize('postgres://'+process.env.USER_POSTGRES+':'+process.env.PASS_POSTGRES+'@'+process.env.DB_HOST+':5432/'+process.env.DATABASE_POSTGRES+'',{
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

})

module.exports = db