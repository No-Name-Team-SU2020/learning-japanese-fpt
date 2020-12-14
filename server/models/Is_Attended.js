const sequelize = require('sequelize');
const db = require('../db');
const Student = require('./Student');
const Lesson = require('./Lesson');
const Class = require('./Class');

const Is_Attended = db.define('is_attended', {
    attended_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    student_id: {
        type: sequelize.STRING,
        ///allowNull: false,
        references: {
            model: Student,
            key: 'student_id'
        }
    },

    lesson_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Lesson,
            key: 'lesson_id'
        }
    },

    class_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Class,
            key: 'class_id'
        }
    },
},
    {
        freezeTableName: true
    }
);

Student.hasMany(Is_Attended, { foreignKey: 'student_id' });
Is_Attended.belongsTo(Student, { foreignKey: 'student_id' });

Lesson.hasMany(Is_Attended, { foreignKey: 'lesson_id' });
Is_Attended.belongsTo(Lesson, { foreignKey: 'lesson_id' });

Class.hasMany(Is_Attended, { foreignKey: 'class_id' });
Is_Attended.belongsTo(Class, { foreignKey: 'class_id' });

module.exports = Is_Attended;