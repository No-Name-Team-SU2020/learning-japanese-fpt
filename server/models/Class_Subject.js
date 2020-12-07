const sequelize = require('sequelize');
const db = require('../db');
const Class = require('./Class');
const Subject = require('./Subject');

const Class_Subject = db.define('class_subject', {
    class_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Class,
            key: 'class_id'
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

Class.belongsToMany(Subject, {through: Class_Subject, foreignKey: 'class_id'});
Subject.belongsToMany(Class, {through: Class_Subject, foreignKey: 'subject_id'});

module.exports = Class_Subject;