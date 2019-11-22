const groupRouter = require('express').Router();
const groupCtrl = require('./group.ctrl');
const auth = require('../../middleware/auth');
const upload = require('../../lib/upload');

groupRouter.get('/group-buying-list/:pageNum', groupCtrl.list);
groupRouter.patch('/group-buying/:id', auth, groupCtrl.join);
groupRouter.get('/group-buying/:id', groupCtrl.getItem);
groupRouter.post('/group-buying', auth, groupCtrl.upload);
groupRouter.put('/photo/group-buying', auth, upload.single('file image'), groupCtrl.photo);
groupRouter.get('/recommended-list', auth, groupCtrl.recommendlist)

module.exports = groupRouter;