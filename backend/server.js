const express = require('express');
const app = express();
const colors = require('colors');
const router = require('./routes/router');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use(router);




app.listen(PORT,()=>console.log(`hey your server has started on port ${PORT}`.green));

