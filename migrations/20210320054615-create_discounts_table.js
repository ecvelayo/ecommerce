'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable("discounts", {
      id : {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      merchantId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      companyId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      branchId: {
        type: Sequelize.BIGINT
      },
      discountCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      discountDescription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      validityPeriod: {
        type: Sequelize.JSON,
        allowNull: false
      },
      discountType: {
        //tells if its fixed discount rate or variable discount rate (e.g. PHP50 off min value of 200, 20% any price max price off 100php)
        type: Sequelize.STRING,
        allowNull: false
      },
      discountValue: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("discounts")
  }
};
