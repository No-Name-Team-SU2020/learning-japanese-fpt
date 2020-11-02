const Sequelize = require('Sequelize');
const db = require('../db');

const Student_Class = db.define('student_class', {
    student_class_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    student_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'student',
            key: 'student_id'
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
module.exports = Student_Class;