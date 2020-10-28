const Sequelize = require('sequelize');
const db = require('../db');

const Question = db.define('question', {
    question_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    question_content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    option_a: {
        type: Sequelize.STRING,
        allowNull: true
    },
    option_b: {
        type: Sequelize.STRING,
        allowNull: true
    },
    option_c: {
        type: Sequelize.STRING,
        allowNull: true
    },
    option_d: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lesson_id: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
            model: 'lesson',
            key: 'lesson_id'
        }
    },
    correct_answer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answer_select: {
        type: Sequelize.STRING,
        allowNull: true
    },
},
{
    freezeTableName: true
}
);
module.exports = Question;