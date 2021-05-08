'use strict';

const { Sequelize } = require('sequelize');

// Node Config
const NODE_ENV = process.env.NODE_ENV;

// API Config
const API_PORT = process.env.API_PORT;

// DB Config
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// JWT Config
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  port: 3306,
  host: DB_HOST,
  dialect: 'mysql',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = {
  // Sequelize
  sequelize,

  // Node
  NODE_ENV,

  // API
  API_PORT,

  // DB
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,

  // JWT
  JWT_ACCESS_SECRET,
};
