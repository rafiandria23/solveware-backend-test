'use strict';

const createError = require('http-errors');

const { Product, Cart } = require('../models');

class CartController {
  static async addCart(req, res, next) {
    try {
      const { id: userId } = req.user;
      const productId =
        req.body.producrId || req.params.productId || req.query.productId;
      const qty = req.body.qty;

      if (!productId || +productId <= 0) {
        throw createError(400, {
          message: 'Product ID cannot be empty or zero!',
        });
      }

      if (!qty || +qty <= 0) {
        throw createError(400, {
          message: 'Product qty cannot be empty or 0!',
        });
      }

      const foundProduct = await Product.findByPk(+productId);

      if (!foundProduct) {
        throw createError(404, {
          message: `Product with ID ${productId} is not found!`,
        });
      }

      const foundCart = await Cart.findOne({
        where: {
          userId,
          productId: foundProduct.id,
        },
      });

      if (foundCart) {
        await Cart.update(
          {
            qty: foundCart.qty + +qty,
          },
          {
            where: {
              id: foundCart.id,
            },
          },
        );

        return res.status(201).json({
          message: 'Successfully added to cart!',
          cart: {
            ...foundCart.toJSON(),
            qty: foundCart.qty + +qty,
          },
        });
      } else {
        const addedCart = await Cart.create({
          userId,
          productId: +productId,
          qty: +qty,
        });

        return res.status(201).json({
          message: 'Successfully added to cart!',
          cart: addedCart,
        });
      }
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = CartController;
