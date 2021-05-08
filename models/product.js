'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );

  Product.associate = function (models) {
    Product.hasMany(models.Transaction, {
      foreignKey: 'productId',
    });

    Product.hasMany(models.Cart, {
      foreignKey: 'productId',
    });
  };

  return Product;
};
