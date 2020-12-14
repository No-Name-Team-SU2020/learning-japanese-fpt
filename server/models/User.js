const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../db');
const Role = require('./Role');

const User = db.define('users', {
    user_name: {
        type: sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    // avatar: {
    //     type: sequelize.STRING,
    // },

    display_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
    },
    role_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'role_id'
        }
    },
},
    {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(10));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        },
        // defaultScope: {
        //     attributes: { exclude: ['password'] }
        // },
    });

    // User.prototype.generateHash = function (password) {
    //     return bcrypt.hash(password, bcrypt.genSaltSync(10))
    // }

    // User.prototype.validPassword = function(password) {
    //     return bcrypt.compare(password, this.password)
    // }

User.hasOne(Role);
Role.belongsTo(User, {
    foreignKey: {
        name: 'role_id'
    }
});

module.exports = User;