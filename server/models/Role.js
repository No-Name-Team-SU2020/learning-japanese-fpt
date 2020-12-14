const sequelize = require('sequelize');
const db = require('../db');
//const User = require('./User');

const Role = db.define('role', {
    role_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },

    role_name: {
        type: sequelize.STRING,
        allowNull: false
    },
},
    {
        freezeTableName: true
    }
);

module.exports = Role;