const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../db');

const User = db.define('users', {
    user_name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    display_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'role',
            key: 'role_id'
        }
    },
    //freezeTableName: true,
    // instanceMethods: {
    //     generateHash(password){
    //         return bcrypt.hash(password, bcrypt.genSalt(10));
    //     },
    //     validPassword(password){
    //         return bcrypt.compare(password, this.password);
    //     }
    // }
});

module.exports = User;