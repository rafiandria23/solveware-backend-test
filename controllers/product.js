'use strict';

const createError = require('http-errors');

const { Product } = require('../models');

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const { name, price } = req.body;

      if (!name) {
        throw createError(400, {
          message: 'Product name cannot be empty!',
        });
      }

      if (!price || (price && +price <= 0)) {
        throw createError(400, {
          message: 'Product price cannot be empty or 0!',
        });
      }

      const addedProduct = await Product.create({
        name,
        price: parseFloat(price),
      });

      return res.status(201).json({
        message: 'Successfully added product!',
        product: addedProduct,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async getAllProducts(req, res, next) {
    try {
      let foundProducts = await Product.findAll();
      foundProducts = foundProducts.map((p) => {
        p.price = parseFloat(p.price);
        return p;
      });

      return res.status(200).json({
        products: foundProducts,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async getProduct(req, res, next) {
    try {
      const productId = req.params.productId || req.query.productId;

      if (!productId || +productId <= 0) {
        throw createError(400, {
          message: 'Product ID cannot be empty or 0!',
        });
      }

      const foundProduct = await Product.findByPk(+productId);

      if (!foundProduct) {
        throw createError(404, {
          message: `Product with ID ${productId} is not found!`,
        });
      }

      foundProduct.price = parseFloat(foundProduct.price);

      return res.status(200).json({
        product: foundProduct,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const productId = req.params.productId || req.query.productId;

      if (!productId || +productId <= 0) {
        throw createError(400, {
          message: 'Product ID cannot be empty or 0!',
        });
      }

      const { name, price } = req.body;

      if (!name) {
        throw createError(400, {
          message: 'Product name cannot be empty!',
        });
      }

      if (!price || (price && +price <= 0)) {
        throw createError(400, {
          message: 'Product price cannot be empty or 0!',
        });
      }

      await Product.update(
        {
          name,
          price: parseFloat(price),
        },
        {
          where: {
            id: +productId,
          },
        },
      );

      const updatedProduct = await Product.findByPk(+productId);

      if (!updatedProduct) {
        throw createError(404, {
          message: `Product with ID ${productId} is not found!`,
        });
      }

      return res.status(200).json({
        message: 'Successfully updated product!',
        product: updatedProduct,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const productId = req.params.productId || req.query.productId;

      if (!productId || +productId <= 0) {
        throw createError(400, {
          message: 'Product ID cannot be empty or 0!',
        });
      }

      const foundProduct = await Product.findByPk(+productId);

      if (!foundProduct) {
        throw createError(404, {
          message: `Product with ID ${productId} is not found!`,
        });
      }

      await Product.destroy({
        where: {
          id: +productId,
        },
      });

      return res.status(200).json({
        message: 'Successfully deleted product!',
        product: foundProduct,
      });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = ProductController;
