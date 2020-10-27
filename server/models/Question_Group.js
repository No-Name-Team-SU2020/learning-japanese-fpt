const Sequelize = require('sequelize');
const db = require('../db');

const Question_Group = db.define('question_group', {
    group_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },

    group_name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    lesson_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'lesson',
            key: 'lesson_id'
        }
    }
},
{
    freezeTableName: true
}
);

module.exports = Question_Group;