'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {}

  Cart.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cart',
    },
  );

  Cart.associate = function (models) {
    Cart.belongsTo(models.User, {
      foreignKey: 'userId',
    });

    Cart.belongsTo(models.Product, {
      foreignKey: 'productId',
    });
  };

  return Cart;
};
