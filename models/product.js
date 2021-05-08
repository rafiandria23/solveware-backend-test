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
    Product.belongsTo(models.Transaction);
  };

  return Product;
};
