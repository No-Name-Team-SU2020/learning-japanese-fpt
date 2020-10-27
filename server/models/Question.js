const Sequelize = require('sequelize');
const db = require('../db');

const Question = db.define('question', {
    question_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
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
    group_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'question_group',
            key: 'group_id'
        }
    },
    correct_answer: {
        type: Sequelize.STRING,
        allowNull: true
    },
    answer_select: {
        type: Sequelize.STRING,
        allowNull: true
    },
});
module.exports = Question;