'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        firstName:'John',
        lastName:'Doe',
        email:'john.doe@gmail.com',
        password:bcrypt.hashSync('BHAKTH' , 10),
        gender:'male',
      },
      {
        firstName:'Ritika',
        lastName:'Raj',
        email:'ritikarj62@gmail.com',
        password:bcrypt.hashSync('BHAKTH' , 10),
        gender:'female',
      },
      {
        firstName:'Priyank',
        lastName:'Sharma',
        email:'priyank.sharma@gmail.com',
        password:bcrypt.hashSync('BHAKTH' , 10),
        gender:'male',
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
