const Sequelize = require('sequelize');
const db = require('../db');
const Class = require('./Class');

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

    //get current date time from computer
    start_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },

    end_time: {
        type: Sequelize.DATE,
    },

    class_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Class,
            key: 'class_id'
        }
    }
},
    {
        freezeTableName: true
    }
);

Class.hasMany(Quiz);
Quiz.belongsTo(Class, {
    foreignKey: {
        name: 'class_id'
    }
});

module.exports = Quiz;