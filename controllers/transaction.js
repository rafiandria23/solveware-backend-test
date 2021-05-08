'use strict';

const createError = require('http-errors');
const moment = require('moment');

const { User, Cart, Transaction } = require('../models');

class TransactionController {
  static async createTransaction(req, res, next) {
    try {
      const { id: userId } = req.user;
      const cartId = req.params.cartId || req.query.cartId;

      if (!cartId) {
        throw createError(400, {
          message: 'Cart ID cannot be empty!',
        });
      }

      const foundCart = await Cart.findOne({
        where: {
          id: +cartId,
        },
      });

      if (!foundCart) {
        throw createError(404, {
          message: `Cart with ID ${cartId} is not found!`,
        });
      }

      const createdTransaction = await Transaction.create({
        userId,
        productId: foundCart.productId,
        datetime: moment().toDate(),
        paid: true,
      });

      await Cart.destroy({
        where: {
          id: foundCart.id,
        },
      });

      return res.status(201).json({
        message: 'Successfully created transaction!',
        transaction: createdTransaction,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async getAllTransactionsForUser(req, res, next) {
    try {
      const userId = req.user.id || req.params.userId;

      const foundTransactions = await Transaction.find({
        where: {
          userId,
        },
      });

      return res.status(200).json({
        transactions: foundTransactions,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async getAllTransactionsForAdmin(req, res, next) {
    try {
      const foundTransactions = await Transaction.find();

      return res.status(200).json({
        transactions: foundTransactions,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async getTransaction(req, res, next) {
    try {
      const transactionId = req.params.transactionId;

      if (!transactionId) {
        throw createError(400, {
          message: 'Transaction cannot be empty!',
        });
      }

      const foundTransaction = await Transaction.findByPk(+transactionId);

      if (!foundTransaction) {
        throw createError(404, {
          message: `Transaction with ID ${transactionId} is not found!`,
        });
      }

      return res.status(200).json({
        transaction: foundTransaction,
      });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = TransactionController;
