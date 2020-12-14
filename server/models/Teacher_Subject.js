const sequelize = require('sequelize');
const db = require('../db');
const Teacher = require('../models/Teacher');
const Subject = require('../models/Subject');

const Teacher_Subject = db.define('teacher_subject', {
    teacher_id: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: Teacher,
            key: 'teacher_id'
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
    },
    
);

Subject.hasMany(Teacher_Subject, { foreignKey: 'subject_id' });
Teacher_Subject.belongsTo(Subject, { foreignKey: 'subject_id' });

Teacher.belongsToMany(Subject, {through: Teacher_Subject, foreignKey: 'teacher_id'});
Subject.belongsToMany(Teacher, {through: Teacher_Subject, foreignKey: 'subject_id'});

module.exports = Teacher_Subject;