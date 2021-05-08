'use strict';

const Authenticator = require('../middlewares/authenticator');

const TransactionRouter = require('express').Router();
const TransactionController = require('../controllers/transaction');

TransactionRouter.use(Authenticator.user);

TransactionRouter.post('/', TransactionController.createTransaction);
TransactionRouter.post('/:cartId', TransactionController.createTransaction);

TransactionRouter.get(
  '/all',
  Authenticator.admin,
  TransactionController.getAllTransactionsForAdmin,
);

TransactionRouter.get('/:transactionId', TransactionController.getTransaction);
TransactionRouter.get('/', TransactionController.getAllTransactionsForUser);

module.exports = TransactionRouter;
