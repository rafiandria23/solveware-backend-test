'use strict';

const Authenticator = require('../middlewares/authenticator');

const TransactionRouter = require('express').Router();
const TransactionController = require('../controllers/transaction');

TransactionRouter.use(Authenticator.user);

TransactionRouter.post('/', TransactionController.createTransaction);
TransactionRouter.post('/:cartId', TransactionController.createTransaction);

TransactionRouter.get('/', TransactionController.getAllTransactionForUser);
TransactionRouter.get('/:transactionId', TransactionController.getTransaction);

TransactionRouter.use(Authenticator.admin);

TransactionRouter.get('/', TransactionController.getAllTransactionForAdmin);

module.exports = TransactionRouter;
