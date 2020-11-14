const Sequelize = require('sequelize');
const db = require('../db');
const Quiz = require('./Quiz');
const Question = require('./Question');

const Quiz_Question = db.define('quiz_question', {

    quiz_question_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    quiz_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Quiz,
            key: 'quiz_id'
        }
    },

    question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Question,
            key: 'question_id'
        }
    }

},
    {
        freezeTableName: true
    }
);

Quiz.belongsToMany(Question, {through: Quiz_Question, foreignKey: 'quiz_id'});
Question.belongsToMany(Quiz, {through: Quiz_Question, foreignKey: 'question_id'});

module.exports = Quiz_Question;