const {DataTypes} =  require("sequelize");
const instance = require("../../../dbconnection");


const transaction = instance.sequelize.define("transactions", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      merchantId: {
        type: DataTypes.BIGINT
      },
      branchId: {
        type: DataTypes.BIGINT
      },
      subtotal: {
        type: DataTypes.DECIMAL(8,2)
      },
      tax: {
        type: DataTypes.DECIMAL(8,2)
      },
      discount: {
        type: DataTypes.BIGINT
      },
      voucher:{
        type: DataTypes.BIGINT
      },
      shipping: {
        type: DataTypes.DECIMAL(8,2)
      },
      notes:{
        type: DataTypes.STRING
      },
      customerId: {
        type: DataTypes.BIGINT
      },
      cardId: {
        type: DataTypes.STRING
      }
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "transactions"
    }
)

exports.model = transaction;