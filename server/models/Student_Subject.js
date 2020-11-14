const Sequelize = require('Sequelize');
const db = require('../db');

const Student_Subject = db.define('student_subject', {
    student_subject_id: {
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
    subject_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'subject',
            key: 'subject_id'
        }
    },

},
    {
        freezeTableName: true
    }
);
module.exports = Student_Subject;