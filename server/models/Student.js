const Sequelize = require('Sequelize');
const db = require('../db');

const Student = db.define('student', {
    student_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false

    },
    student_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_name: {
        type: Sequelize.STRING,
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