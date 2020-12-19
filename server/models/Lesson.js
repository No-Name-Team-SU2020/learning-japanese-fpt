const sequelize = require('sequelize');
const db = require('../db');
const Subject = require('./Subject');

const Lesson = db.define('lesson', {
    lesson_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    lesson_content: {
        type: sequelize.STRING,
        allowNull: false

    },
    lesson_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    subject_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Subject,
            key: 'subject_id'
        }
    },
},
    {
        freezeTableName: true
    }
);

Subject.hasMany(Lesson, { foreignKey: 'subject_id' });
Lesson.belongsTo(Subject, { foreignKey: 'subject_id' });

module.exports = Lesson;