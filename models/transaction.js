'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      datetime: DataTypes.DATE,
      paid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Transaction',
    },
  );

  Transaction.associate = function (models) {
    Transaction.belongsTo(models.User);
  };

  return Transaction;
};
