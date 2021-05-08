'use strict';

const { hashSync } = require('bcryptjs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate(instance, options) {
          if (instance.password) {
            instance.password = hashSync(instance.password, 10);
          }
        },
      },
    },
  );

  User.associate = function (models) {
    User.hasMany(models.Transaction);
  };

  return User;
};
