'use strict';

const Authenticator = require('../middlewares/authenticator');

const CartRouter = require('express').Router();
const CartController = require('../controllers/cart');

CartRouter.use(Authenticator.user);

CartRouter.post('/', CartController.addCart);
CartRouter.post('/:productId', CartController.addCart);

module.exports = CartRouter;
