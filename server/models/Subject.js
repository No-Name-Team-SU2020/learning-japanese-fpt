const Sequelize = require('sequelize');
const db = require('../db');

const Subject = db.define('subject', {
    subject_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },

    subject_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
}
);

module.exports = Subject;