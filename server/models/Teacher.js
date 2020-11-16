const sequelize = require('sequelize');
const db = require('../db');

const Teacher = db.define('teacher', {
    teacher_id: {
        type: sequelize.STRING,
        primaryKey: true,
        allowNull: false

    },
    teacher_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    user_name: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_name'
        }
    },
},
    {
        freezeTableName: true
    }
);

module.exports = Teacher;