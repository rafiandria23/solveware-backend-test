'use strict';

const moment = require('moment');
const { hashSync } = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          name: 'Adam Rafiandri',
          email: 'adam@admin.com',
          password: hashSync('password123', 10),
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
