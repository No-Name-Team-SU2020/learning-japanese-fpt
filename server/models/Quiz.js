const Sequelize = require('sequelize');
const db = require('../db');

const Quiz = db.define('quiz', {
    quiz_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    quiz_name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    number_of_question: {
        type: Sequelize.INTEGER,
    },

    create_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },

    end_time: {
        type: Sequelize.DATE,
    }
},
    {
        freezeTableName: true
    }
);

module.exports = Quiz;