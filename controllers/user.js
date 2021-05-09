'use strict';

const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('validator').default;

const { User } = require('../models');

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;

      if (!name) {
        throw createError(400, {
          message: 'User name cannot be empty!',
        });
      }

      if (!email) {
        throw createError(400, {
          message: 'User email cannot be empty!',
        });
      } else if (!validator.isEmail(email)) {
        throw createError(400, {
          message: 'Invalid user email address!',
        });
      }

      if (!passowrd) {
        throw createError(400, {
          message: 'User password cannot be empty!',
        });
      }

      const foundUser = await User.scope('withoutPassword').findOne({
        where: {
          email,
        },
      });

      if (foundUser) {
        throw createError(400, {
          message: `User with email ${email} already registered!`,
        });
      }

      await User.create({
        name,
        email,
        password,
      });

      const accessTokenPayload = {
        email,
        role: 'user',
      };
      const accessToken = jwt.sign(
        accessTokenPayload,
        process.env.JWT_ACCESS_SECRET,
      );

      return res.status(201).json({
        message: 'Successfully registered!',
        user: {
          name,
          email,
        },
        accessToken,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw createError(400, {
          message: 'User email cannot be empty!',
        });
      } else if (!validator.isEmail(email)) {
        throw createError(400, {
          message: 'Invalid user email address!',
        });
      }

      if (!password) {
        throw createError(400, {
          message: 'User password cannot be empty!',
        });
      }

      const foundUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!foundUser) {
        throw createError(404, {
          message: `User with email ${email} is not found! Please register to continue.`,
        });
      }

      if (bcrypt.compareSync(password, foundUser.password)) {
        const accessTokenPayload = {
          email,
          role: 'user',
        };
        const accessToken = jwt.sign(
          accessTokenPayload,
          process.env.JWT_ACCESS_SECRET,
        );

        return res.status(200).json({
          message: 'Successfully logged in!',
          user: {
            name: foundUser.name,
            email: foundUser.email,
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

  static async getAllUsers(req, res, next) {
    try {
      const foundUsers = await User.findAll({
        where: {},
        attributes: {
          exclude: ['password'],
        },
      });

      return res.status(200).json({
        users: foundUsers,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async getUser(req, res, next) {
    try {
      const userId = req.params.userId;

      if (!userId || +userId <= 0) {
        throw createError(400, {
          message: 'User ID cannot be empty or 0!',
        });
      }

      const foundUser = await User.findOne({
        where: {
          id: +userId,
        },
        attributes: {
          exclude: ['password'],
        },
      });

      if (!foundUser) {
        throw createError(404, {
          message: `User with ID ${userId} is not found!`,
        });
      }

      return res.status(200).json({
        user: foundUser,
      });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = UserController;
