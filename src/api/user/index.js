const userRouter = require('express').Router();
const userCtrl = require('./user.ctrl');
const auth = require('../../middleware/auth');

userRouter.post('/signup', userCtrl.sign);
userRouter.post('/login', userCtrl.login);
userRouter.patch('/addstar', auth, userCtrl.addstar);

module.exports = userRouter;