const apiRouter = require('express').Router();
const userRouter = require('./user');
const groupRouter = require('./group');

apiRouter.use('/user', userRouter);
apiRouter.use('', groupRouter);

module.exports = apiRouter;