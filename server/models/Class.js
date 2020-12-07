const sequelize = require('sequelize');
const db = require('../db');

const Class = db.define('class', {
    class_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    class_name: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
},
    {
        freezeTableName: true
    }
);

module.exports = Class;