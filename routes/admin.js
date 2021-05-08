'use strict';

const AdminRouter = require('express').Router();
const AdminController = require('../controllers/admin');

AdminRouter.post('/login', AdminController.login);

module.exports = AdminRouter;
