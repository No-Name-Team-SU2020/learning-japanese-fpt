const Sequelize = require('sequelize');
const db = require('../db');
const Subject = require('./Subject');

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
            model: Subject,
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

Subject.hasMany(Lesson);
Lesson.belongsTo(Subject, {
    foreignKey: {
        name: 'subject_id'
    }
});

module.exports = Lesson;