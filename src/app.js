const express = require('express');
const cors = require('cors');
const override = require('method-override');

const app = express();
const apiRouter = require('./api');
const db = require('./models');
db.sequelize.sync();

app.set('port', 3000);
app.use(cors());
app.use(override());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.listen(app.get('port'), () => {
    console.log(`server is listening on ${app.get('port')} port`);
})