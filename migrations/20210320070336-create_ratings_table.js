'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ratings", {
      id: {
        autoIncrement: false,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      accountId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      productId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      transactionId:{
        allowNull: false,
        type: Sequelize.BIGINT
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      review: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ratings")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
