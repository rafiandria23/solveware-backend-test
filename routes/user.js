'use strict';

// Middlewares
const Authenticator = require('../middlewares/authenticator');

const UserRouter = require('express').Router();
const UserController = require('../controllers/user');

UserRouter.post('/register', UserController.register);
UserRouter.post('/login', UserController.login);

UserRouter.use(Authenticator.admin);

UserRouter.use('/:userId', UserController.getUser);
UserRouter.use('/', UserController.getAllUsers);

module.exports = UserRouter;
