const Sequelize = require('sequelize');
const db = require('../db');

const Lesson = db.define('lesson', {
    lesson_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    lesson_content: {
        type: Sequelize.STRING,
        allowNull: false

    },
    lesson_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subject_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'subject',
            key: 'subject_id'
        }
    },
    time_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'time',
            key: 'time_id'
        }
    }
},
    {
        freezeTableName: true
    }
);
module.exports = Lesson;