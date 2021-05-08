'use strict';

const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { Admin } = require('../models');

class AdminController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw createError(400, {
          message: 'Admin email cannot be empty!',
        });
      }

      if (!password) {
        throw createError(400, {
          message: 'Admin password cannot be empty!',
        });
      }

      const foundAdmin = await Admin.findOne({
        where: {
          email,
        },
      });

      if (!foundAdmin) {
        throw createError(404, {
          message: `Admin with email ${email} is not found!`,
        });
      }

      if (bcrypt.hashSync(password, foundAdmin.password)) {
        const accessTokenPayload = {
          email,
          role: 'admin',
        };
        const accessToken = jwt.sign(
          accessTokenPayload,
          process.env.JWT_ACCESS_SECRET,
        );

        return res.status(200).json({
          message: 'Successfully logged in!',
          admin: {
            name: foundAdmin.name,
            email: foundAdmin.email,
          },
          accessToken,
        });
      } else {
        throw createError(400, 'Wrong email or password!');
      }
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = AdminController;
