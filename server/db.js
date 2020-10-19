//const Pool = require('pg').Pool
const Sequelize = require('sequelize');

//Old connecting method
// const pool = new Pool({
//     user: "postgres",
//     password: "09001210",
//     host: "localhost",
//     port: 5432,
//     database: "Capstone_Project"
// });

//New connecting method with sequelize
const db = new Sequelize('Capstone_Project', 'postgres', '09001210', {
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