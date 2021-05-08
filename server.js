'use strict';

const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const morgan = require('morgan');
const { createServer } = require('http');

// Config
const { NODE_ENV, API_PORT, sequelize } = require('./config');

const app = express();
const server = createServer(app);

app.set('trust proxy', true);
app.use(morgan('combined'));
app.use(
  cors({
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    origin: '*',
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
