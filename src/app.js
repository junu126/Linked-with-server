const express = require('express');
const cors = require('cors');

const app = express();

app.set('port', 3000);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next)=> {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next)=> {
    res.status(err.status || 500).json({
        success: false,
        message: err.message,
    })
}) 

app.listen(app.get('port'), ()=> {
    console.log(`server is listening on ${app.get('port')} port`);
})