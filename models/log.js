const sequelize = require('sequelize');
const database = require('../db');


const Log = database.define('log', {
    description: {
        type: sequelize.STRING,
        allowNull: false,
    },
    definition: {
        type: sequelize.STRING,
        allowNull: false,
    },
    result:{
        type: sequelize.STRING,
    } ,
    owner_id:{
        type: sequelize.INTEGER,
    }
});

module.exports = Log;