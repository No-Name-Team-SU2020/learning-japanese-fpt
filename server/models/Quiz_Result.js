const sequelize = require('sequelize');
const db = require('../db');
const Lesson = require('./Lesson');
const Student = require('./Student');
const Question = require('./Question');

const Quiz_Result = db.define('quiz_result', {
    quiz_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    student_id: {
        type: sequelize.STRING,
        allowNull: false,
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

    score: {
        type: sequelize.INTEGER,
    },

    percentage: {
        type: sequelize.REAL,
    },

    student_answer: {
        type: sequelize.JSONB,
    }

},
    {
        freezeTableName: true
    }
);

Student.hasMany(Quiz_Result, { foreignKey: 'student_id' });
Quiz_Result.belongsTo(Student, { foreignKey: 'student_id' });

Lesson.hasMany(Quiz_Result, { foreignKey: 'lesson_id' });
Quiz_Result.belongsTo(Lesson, { foreignKey: 'lesson_id' });

module.exports = Quiz_Result;