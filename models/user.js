'use strict';

const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

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
            instance.password = bcrypt.hashSync(instance.password, 10);
          }
        },
      },
      scopes: {
        withoutPassword: {
          attributes: {
            exclude: ['password'],
          },
        },
      },
    },
  );

  User.associate = function (models) {
    User.hasMany(models.Transaction, {
      foreignKey: 'userId',
    });

    User.hasMany(models.Cart, {
      foreignKey: 'userId',
    });
  };

  return User;
};
