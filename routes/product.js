'use strict';

const Authenticator = require('../middlewares/authenticator');

const ProductRouter = require('express').Router();
const ProductController = require('../controllers/product');

ProductRouter.get('/', ProductController.getAllProducts);
ProductRouter.get('/:productId', ProductController.getProduct);

ProductRouter.use(Authenticator.admin);

ProductRouter.post('/', ProductController.addProduct);

ProductRouter.put('/', ProductController.updateProduct);
ProductRouter.put('/:productId', ProductController.updateProduct);

ProductRouter.delete('/', ProductController.deleteProduct);
ProductRouter.delete('/:productId', ProductController.deleteProduct);

module.exports = ProductRouter;
