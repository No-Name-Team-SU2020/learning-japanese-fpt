const sequelize = require('sequelize');
const db = require('../db');
const Student = require('./Student');
const Subject = require('./Subject');

const Student_Subject = db.define('student_subject', {
    student_id: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: Student,
            key: 'student_id'
        }
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

Student.belongsToMany(Subject, {through: Student_Subject, foreignKey: 'student_id'});
Subject.belongsToMany(Student, {through: Student_Subject, foreignKey: 'subject_id'});

module.exports = Student_Subject;