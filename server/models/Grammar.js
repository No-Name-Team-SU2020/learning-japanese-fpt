const sequelize = require('sequelize');
const db = require('../db');
const Lesson = require('./Lesson');

const Grammar = db.define('grammar', {
    grammar_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    vocabulary: {
        type: sequelize.STRING,
        allowNull: false,
    },

    explain: {
        type: sequelize.STRING,
        allowNull: false,
    },

    example: {
        type: sequelize.STRING,
        allowNull: false,
    },

    attention: {
        type: sequelize.STRING,
        allowNull: false,
    },

    lesson_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Lesson,
            key: 'lesson_id'
        }
    },
},
    {
        freezeTableName: true
    }
);

module.exports = Grammar;