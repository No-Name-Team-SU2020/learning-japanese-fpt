const Sequelize = require('sequelize');
const db = require('../db');

const Time = db.fefine('time', {
    time_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    start_time: {
        type: Sequelize.DATE,
        allowNull: true
    },
    finish_time: {
        type: Sequelize.DATE,
        allowNull: false
    }
},
    {
        freezeTableName: true
    }
);
module.exports = Time;