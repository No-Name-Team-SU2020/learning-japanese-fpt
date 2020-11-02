const Sequelize = require('Sequelize');
const db = require('../db');

const Teacher_Subject = db.define('teacher_subject', {
    teacher_subject_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    teacher_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'teacher',
            key: 'teacher_id'
        }
    },
    subject_id: {
        type: Sequelize.STRING,
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