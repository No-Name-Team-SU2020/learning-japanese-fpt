const sequelize = require('sequelize');
const db = require('../db');

const Question = db.define('question', {
    question_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    question_content: {
        type: sequelize.STRING,
        allowNull: false
    },
    option_a: {
        type: sequelize.STRING,
        allowNull: true,
    },
    option_b: {
        type: sequelize.STRING,
        allowNull: true
    },
    option_c: {
        type: sequelize.STRING,
        allowNull: true
    },
    option_d: {
        type: sequelize.STRING,
        allowNull: true
    },
    lesson_id: {
        type: sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
            model: 'lesson',
            key: 'lesson_id'
        }
    },
    correct_answer: {
        type: sequelize.STRING,
        allowNull: false
    },
},
    {
        freezeTableName: true
    }
);
module.exports = Question;