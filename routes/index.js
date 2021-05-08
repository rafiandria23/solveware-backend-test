'use strict';

const moment = require('moment');

const MainRouter = require('express').Router();
const AdminRouter = require('./admin');
const UserRouter = require('./user');

MainRouter.get('/', (_, res) => {
  return res.status(200).json({
    date: moment().format('YYYY-MM-DD'),
    time: moment().format('HH:mm:ss'),
  });
});

MainRouter.use('/admins', AdminRouter);
MainRouter.use('/users', UserRouter);

module.exports = MainRouter;
