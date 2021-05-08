'use strict';

const createError = require('http-errors');

const { Cart } = require('../models');

class CartController {
  static async addCart(req, res, next) {
    try {
      const { id: userId } = req.user;
      const productId = req.params.productId || req.query.productId;

      if (!producrId) {
        throw createError(400, {
          message: 'Product ID cannot be empty!',
        });
      }

      const addedCart = await Cart.create({
        userId,
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
