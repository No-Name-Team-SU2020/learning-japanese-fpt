const sequelize = require('sequelize');
const db = require('../db');

const Teacher_Subject = db.define('teacher_subject', {
    teacher_id: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: 'teacher',
            key: 'teacher_id'
        }
    },
    subject_id: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: 'subject',
            key: 'subject_id'
        }
    },
},
    {
        freezeTableName: true
    }
);
module.exports = Teacher_Subject;