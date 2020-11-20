const sequelize = require('sequelize');
const db = require('../db');
const Class = require('./Class');
const Student = require('./Student');

const Student_Class = db.define('student_class', {
    student_id: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: Student,
            key: 'student_id'
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
    }
);

Student.belongsToMany(Class, {through: Student_Class, foreignKey: 'student_id'});
Class.belongsToMany(Student, {through: Student_Class, foreignKey: 'class_id'});

module.exports = Student_Class;