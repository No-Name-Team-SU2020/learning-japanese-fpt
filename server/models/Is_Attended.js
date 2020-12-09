const sequelize = require('sequelize');
const db = require('../db');
const Student = require('./Student');
const Lesson = require('./Lesson');

const Is_Attended = db.define('is_attended', {
    attended_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    student_id: {
        type: sequelize.STRING,
        ///allowNull: false,
        references: {
            model: Student,
            key: 'student_id'
        }
    },

    lesson_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Lesson,
            key: 'lesson_id'
        }
    },

    isAttended: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
    }
},
    {
        freezeTableName: true
    }
);

module.exports = Is_Attended;