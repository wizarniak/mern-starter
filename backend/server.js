const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./routes/routes.js');

const { mongodbUri } = require('../config.js');

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', router);

module.exports = app;
