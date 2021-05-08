'use strict';

function errorHandler(err, req, res, next) {
  const errObj = {
    name: err.name,
    status: err.status || 500,
    message: err.message,
  };

  console.error(errObj);

  switch (err.status) {
    case 400:
      return res.status(400).json(errObj);

    case 401:
      return res.status(401).json(errObj);

    case 403:
      return res.status(403).json(errObj);

    case 404:
      return res.status(404).json(errObj);

    default:
      return res.status(500).json(errObj);
  }
}

module.exports = errorHandler;
