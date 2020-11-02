const Sequelize = require('Sequelize');
const db = require('../db');

const Teacher = db.define('teacher', {
    teacher_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false

    },
    teacher_name: {
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
module.exports = Teacher;