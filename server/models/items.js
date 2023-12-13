'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {

    static associate(models) {

      items.belongsToMany(models.cart, { through: models.cartItem, onDelete: 'CASCADE' });

      items.hasMany(models.cartItem);

      items.belongsToMany(models.orders, { through: models.orderItems, onDelete: 'CASCADE' });

    }
  }
  items.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM,
      values: ['Fiction', 'Non-Fiction', 'Novel', 'Romance', 'Biography', 'Mystery'],
      allowNull: false
    },
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'items',
  });
  return items;
};