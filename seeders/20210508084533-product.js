'use strict';

const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name:
            'MacBook Air - Apple M1 Chip with 8-Core CPU and 7-Core GPU 256 GB Storage',
          price: parseFloat('1449'),
          createdAt: moment().toDate(),
          updatedAt: moment().toDate(),
        },
        {
          name:
            'MacBook Air - Apple M1 Chip with 8-Core CPU and 8-Core GPU 512 GB Storage',
          price: parseFloat('1799'),
          createdAt: moment().toDate(),
          updatedAt: moment().toDate(),
        },
        {
          name:
            'MacBook Pro 13" - Apple M1 Chip with 8-Core CPU and 8-Core GPU 256 GB Storage',
          price: parseFloat('1849'),
          createdAt: moment().toDate(),
          updatedAt: moment().toDate(),
        },
        {
          name:
            'MacBook Pro 13" - Apple M1 Chip with 8-Core CPU and 8-Core GPU 512 GB Storage',
          price: parseFloat('2149'),
          createdAt: moment().toDate(),
          updatedAt: moment().toDate(),
        },
        {
          name:
            'MacBook Pro 16" - 2.6GHz 6-Core Processor 512 GB Storage AMD Radeon Pro 5300M',
          price: parseFloat('3499'),
          createdAt: moment().toDate(),
          updatedAt: moment().toDate(),
        },
        {
          name:
            'MacBook Pro 16" - 2.3GHz 8-Core Processor 1TB Storage AMD Radeon Pro 5500M',
          price: parseFloat('3999'),
          createdAt: moment().toDate(),
          updatedAt: moment().toDate(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
