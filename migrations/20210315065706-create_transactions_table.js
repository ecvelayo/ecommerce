'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("transactions", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.BIGINT
      },
      merchantId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      branchId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      subtotal: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false
      },
      tax: {
        type: Sequelize.DECIMAL(8,2)
      },
      serviceFee: {
        type: Sequelize.DECIMAL(8,2)
      },
      discount: {
        type: Sequelize.BIGINT
      },
      voucher: {
        type: Sequelize.BIGINT
      },
      shipping: {
        type: Sequelize.DECIMAL(8,2)
      },
      notes:{
        type: Sequelize.STRING
      },
      customerId:{
        type: Sequelize.BIGINT
      },
      cardId: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("transactions")
  }
};
