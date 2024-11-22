'use strict'

const userRouter = require('./user.router');
const productRouter = require('./product.router');
const clientRouter = require('./client.router');
const saleRouter = require('./sale.router');
const loginRouter = require('./login.router');
const middlewareSecurity = require('../middlewares/encrypt.middleware');

function routes(app) {
    app.use('/api/user', userRouter);//middlewareSecurity.verifyToken,
    app.use('/api/product', productRouter);
    app.use('/api/client', clientRouter);
    app.use('/api/sale', saleRouter);
    app.use('/api/login', loginRouter);
}

module.exports = routes;