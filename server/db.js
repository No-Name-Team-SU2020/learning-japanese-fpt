//const Pool = require('pg').Pool
const sequelize = require('sequelize');

// const pool = new Pool({
//     user: "postgres",
//     password: "admin",
//     host: "localhost",
//     port: 5432,
//     database: "Capstone_Project"
// });

//New connecting method with sequelize
const db = new sequelize('Capstone_Project', 'postgres', '09001210', {
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