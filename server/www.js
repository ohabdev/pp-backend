
require('dotenv').config();

const express = require('express');
const app = require('./app');
const path = require('path');
console.log("==========>", app);

// app.app.use('/docs', express.static(path.join(__dirname, '..', 'apidocs')));

app.startHttpServer();