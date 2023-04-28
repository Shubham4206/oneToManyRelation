const { DataTypes }=require('sequelize');
const sequelize=require('../connection/database.js');

const product=sequelize.define('product',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    unique:true,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  price:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },


});
module.exports=product;