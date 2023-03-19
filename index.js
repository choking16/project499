const contentRouter = require('./Website');
const express = require('express');
const{ res } = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.port|| 3000;

app.use(express.static('public'));
app.use(morgan("common",{immediate:true}));

app.use('/Website',contentRouter)

app.get('/',(req, res)=> res.redirect('/Website'));

app.listen(port,() => console.log(`Port sever : http://localhost:${port}`));