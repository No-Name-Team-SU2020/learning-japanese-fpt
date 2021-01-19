const sequelize = require('sequelize');
const db = require('../db');
//const { DataTypes } = require('sequelize');
//const withInterval = require('sequelize-interval-postgres');

//const NewDataTypes = withInterval(DataTypes);

const Quiz_Preset = db.define('quiz_preset', {
    preset_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    number_of_questions: {
        type: sequelize.INTEGER,
        allowNull: false
    },

    quiz_time: {
        type: sequelize.INTEGER,
        allowNull: false
    },

    is_chosen: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},
    {
        freezeTableName: true
    }
);

module.exports = Quiz_Preset;