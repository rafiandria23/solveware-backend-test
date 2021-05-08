'use strict';

const UserRouter = require('express').Router();
const UserController = require('../controllers/user');

UserRouter.post('/register', UserController.register);
UserRouter.post('/login', UserController.login);

module.exports = UserRouter;
