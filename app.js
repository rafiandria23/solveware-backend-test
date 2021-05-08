'use strict';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Middlewares
const errorHandler = require('./middlewares/error-handler');

const app = express();
const port = process.env.PORT || 3000;

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

app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Solveware API is listening on\nPORT\t=>\t${port}\nENV\t=>\t${process.env.NODE_ENV.toUpperCase()}`,
  );
});
