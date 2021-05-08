'use strict';

const moment = require('moment');

const MainRouter = require('express').Router();
const AdminRouter = require('./admin');
const UserRouter = require('./user');
const ProductRouter = require('./product');
const CartRouter = require('./cart');

MainRouter.get('/', (_, res) => {
  return res.status(200).json({
    date: moment().format('YYYY-MM-DD'),
    time: moment().format('HH:mm:ss'),
  });
});

MainRouter.use('/admins', AdminRouter);
MainRouter.use('/users', UserRouter);
MainRouter.use('/products', ProductRouter);
MainRouter.use('/carts', CartRouter);

module.exports = MainRouter;
