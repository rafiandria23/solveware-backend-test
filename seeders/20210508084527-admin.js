'use strict';

const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          name: 'Adam Rafiandri',
          email: 'adam@admin.com',
          password: 'password123',
          createdAt: moment().toDate(),
          updatedAt: moment().toDate(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
