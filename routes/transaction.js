'use strict';

const Authenticator = require('../middlewares/authenticator');

const TransactionRouter = require('express').Router();
const TransactionController = require('../controllers/transaction');

TransactionRouter.use(Authenticator.user);

TransactionRouter.post('/', TransactionController.createTransaction);
TransactionRouter.post('/:cartId', TransactionController.createTransaction);

TransactionRouter.get(
  '/:userId',
  TransactionController.getAllTransactionsForUser,
);
TransactionRouter.get('/:transactionId', TransactionController.getTransaction);

TransactionRouter.use(Authenticator.admin);

TransactionRouter.get('/all', TransactionController.getAllTransactionsForAdmin);

module.exports = TransactionRouter;
