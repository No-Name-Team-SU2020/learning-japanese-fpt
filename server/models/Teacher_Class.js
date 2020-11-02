const Sequelize = require('Sequelize');
const db = require('../db');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');

const Teacher_Class = db.define('teacher_class', {
    teacher_class_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    teacher_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'teacher',
            key: 'teacher_id'
        }
    },
    class_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'class',
            key: 'class_id'
        }
    },
},
    {
        freezeTableName: true
    }
);

Teacher.belongsToMany(Class, { through: Teacher_Class });
Class.belongsToMany(Teacher, { through: Teacher_Class });

module.exports = Teacher_Class;