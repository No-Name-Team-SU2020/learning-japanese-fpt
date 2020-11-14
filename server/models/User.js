const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../db');
const Role = require('./Role');

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
        allowNull: false,
        select: false
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'role_id'
        }
    },
}, {
    instanceMethods: {
        generateHash(password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(10));
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }
},

    {
        freezeTableName: true
    }
);

User.hasOne(Role);
Role.belongsTo(User, {
    foreignKey: {
        name: 'role_id'
    }
});

module.exports = User;