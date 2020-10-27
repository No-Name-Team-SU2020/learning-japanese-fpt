const Sequelize = require('sequelize');
const db = require('../db');

const Role = db.define('role', {
    role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },

    role_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Role;