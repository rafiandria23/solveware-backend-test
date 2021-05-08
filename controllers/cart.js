'use strict';

const createError = require('http-errors');

const { Product, Cart } = require('../models');

class CartController {
  static async addCart(req, res, next) {
    try {
      const { id: userId } = req.user;
      const productId =
        req.body.producrId || req.params.productId || req.query.productId;

      if (!producrId(+productId <= 0)) {
        throw createError(400, {
          message: 'Product ID cannot be empty!',
        });
      }

      const foundProduct = await Product.findByPk(+productId);

      if (!foundProduct) {
        throw createError(404, {
          message: `Product with ID ${productId} is not found!`,
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
