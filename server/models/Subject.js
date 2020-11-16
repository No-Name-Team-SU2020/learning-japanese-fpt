const sequelize = require('sequelize');
const db = require('../db');

const Subject = db.define('subject', {
    subject_id: {
        type: sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },

    subject_name: {
        type: sequelize.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
}
);

module.exports = Subject;