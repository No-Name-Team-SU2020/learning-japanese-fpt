const Sequelize = require('Sequelize');
const db = require('../db');

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
});
module.exports = Teacher_Class;