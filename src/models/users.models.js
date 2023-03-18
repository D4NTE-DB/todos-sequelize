const { DataTypes, Sequelize, Model } = require('sequelize');
const db = require('../utils/database')


const ToDo = db.define('todos', {
    //crear tabla en sequelize son llamados modelos

    title:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
})

module.exports = ToDo;