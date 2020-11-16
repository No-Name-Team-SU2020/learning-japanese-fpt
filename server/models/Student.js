const sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
    student_id: {
        type: sequelize.STRING,
        primaryKey: true,
        allowNull: false

    },
    student_name: {
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
module.exports = Student;