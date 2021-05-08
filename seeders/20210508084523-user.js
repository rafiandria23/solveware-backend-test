'use strict';

const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'john@email.com',
          password: 'password123',
          createdAt: moment().toDate(),
          updatedAt: moment().toDate(),
        },
        {
          name: 'Jane Doe',
          email: 'jane@email.com',
          password: 'password123',
          createdAt: moment().toDate(),
          updatedAt: moment().toDate(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
