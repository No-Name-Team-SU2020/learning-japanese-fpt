//const Pool = require('pg').Pool
const sequelize = require('sequelize');


//New connecting method with sequelize
const db = new Sequelize('Capstone_Project', 'postgres', 'Nousems2you.', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },

      define: {
        timestamps: false
      }
  });

module.exports = db;
