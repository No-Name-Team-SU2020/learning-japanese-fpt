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

    score: {
        type: Sequelize.DOUBLE,
    },
},
    {
        freezeTableName: true
    }
);

module.exports = Quiz;