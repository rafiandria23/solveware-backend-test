'use strict';

const createError = require('http-errors');

const { User, Cart } = require('../models');

class CartController {
  static async AddCart(req, res, next) {
    try {
      const { email } = req.user;
      const productId = req.params.productId || req.query.productId;

      if (!producrId) {
        throw createError(400, {
          message: 'Product ID cannot be empty!',
        });
      }

      const foundUser = await User.findOne({
        where: {
          email,
        },
      });

      const addedCart = await Cart.create({
        userId: foundUser.id,
        productId: +productId,
      });

      return res.status(201).json({
        message: 'Successfully added to cart!',
        cart: addedCart,
      });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = CartController;
