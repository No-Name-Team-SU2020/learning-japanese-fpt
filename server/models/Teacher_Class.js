const sequelize = require('sequelize');
const db = require('../db');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');

const Teacher_Class = db.define('teacher_class', {
    teacher_class_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    teacher_id: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: Teacher,
            key: 'teacher_id'
        }
    },
    class_id: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: Class,
            key: 'class_id'
        }
    },
},
    {
        freezeTableName: true
    },
    
);

Teacher.belongsToMany(Class, {through: Teacher_Class, foreignKey: 'teacher_id'});
Class.belongsToMany(Teacher, {through: Teacher_Class, foreignKey: 'class_id'});

module.exports = Teacher_Class;