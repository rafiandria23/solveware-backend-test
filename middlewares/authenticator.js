'use strict';

const createError = require('http-errors');
const jwt = require('jsonwebtoken');

const { User, Admin } = require('../models');

class Authenticator {
  static async user(req, res, next) {
    try {
      const accessToken =
        req.headers.authorization?.split(' ')[1] ||
        req.headers['X-ACCESS-TOKEN'] ||
        req.headers['x-access-token'] ||
        req.body.accessToken;

      if (!accessToken) {
        throw createError(401, {
          message: 'You must be logged in!',
        });
      }

      const { email, role } = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET,
      );

      switch (role) {
        case 'user':
          const foundUser = await User.findOne({
            where: {
              email,
            },
            attributes: {
              exclude: ['password'],
            },
          });

          if (!foundUser) {
            throw createError(401, {
              message: 'Invalid access token!',
            });
          }

          req.user = foundUser;
          break;

        case 'admin':
          const foundAdmin = await Admin.findOne({
            where: {
              email,
            },
            attributes: {
              exclude: ['password'],
            },
          });

          if (!foundAdmin) {
            throw createError(401, {
              message: 'Invalid access token!',
            });
          }

          req.admin = foundAdmin;
          break;

        default:
          throw createError(401, {
            message: 'Invalid access token!',
          });
      }

      return next();
    } catch (err) {
      return next(err);
    }
  }

  static async admin(req, res, next) {
    try {
      const accessToken =
        req.headers.authorization?.split(' ')[1] ||
        req.headers['X-ACCESS-TOKEN'] ||
        req.headers['x-access-token'] ||
        req.body.accessToken;

      if (!accessToken) {
        throw createError(401, {
          message: 'You must be logged in!',
        });
      }

      const { email, role } = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET,
      );

      if (role === 'admin') {
        const foundAdmin = await Admin.findOne({
          where: {
            email,
          },
          attributes: {
            exclude: ['password'],
          },
        });

        if (!foundAdmin) {
          throw createError(401, {
            message: 'Invalid access token!',
          });
        }

        req.admin = foundAdmin;
      } else {
        throw createError(401, {
          message: 'Invalid access token!',
        });
      }

      return next();
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = Authenticator;
