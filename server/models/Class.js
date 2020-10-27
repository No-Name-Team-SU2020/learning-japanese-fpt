const Sequelize = require('sequelize');
const db = require('../db');

const Class = db.define('class', {
    class_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },

    class_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
        freezeTableName: true
    }
);

module.exports = Class;