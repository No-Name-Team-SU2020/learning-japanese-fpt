const sequelize = require('sequelize');
const db = require('../db');
const Lesson = require('./Lesson');

const Quiz = db.define('quiz', {
    quiz_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    quiz_name: {
        type: sequelize.STRING,
        allowNull: false
    },

    number_of_question: {
        type: sequelize.INTEGER,
    },

    //get current date time from computer
    // start_time: {
    //     type: sequelize.DATE,
    //     defaultValue: sequelize.NOW
    // },

    // end_time: {
    //     type: sequelize.DATE,
    // },
},
    {
        freezeTableName: true
    }
);

// Class.hasMany(Quiz);
// Quiz.belongsTo(Class, {
//     foreignKey: {
//         name: 'class_id'
//     }
// });

module.exports = Quiz;