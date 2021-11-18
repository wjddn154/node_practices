const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({});

const User = sequelize.define('User', {
   no: {
    field: 'no',
    type: DataTypes.BIGINT(11),
    primaryKey: true,
    autoIncrement: true    
   },
   name: {

   },
   email: {

   }, 
}, {
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    createAt: false,
    updateAt: false,
    tableName: 'user'
})

const User = sequelize.define('User', {
   no: {
    field: 'no',
    type: DataTypes.BIGINT(11),
    primaryKey: true,
    autoIncrement: true    
   },
   name: {

   },
   email: {

   }, 
}, {
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    createAt: false,
    updateAt: false,
    tableName: 'user'
})