const sequelize = require('sequelize');
const database = require('../db');


const User = database.define('user', {
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
    },
    firstName:{
        type: sequelize.STRING,
        allowNull:true,
    } ,
    lastName:{
        type: sequelize.STRING
    }
});

module.exports = User;