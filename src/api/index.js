const apiRouter = require('express').Router();
const userRouter = require('./user');
const groupRouter = require('./group');
const meisterRouter = require('./3meister');

apiRouter.use('/user', userRouter);
apiRouter.use('', groupRouter);
apiRouter.use('/meister', meisterRouter);

module.exports = apiRouter;