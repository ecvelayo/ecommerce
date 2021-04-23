const {DataTypes} =  require("sequelize");
const instance = require("../../../dbconnection");


const discount = instance.sequelize.define("discounts", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      merchantId: {
        type: DataTypes.BIGINT
      },
      branchId:{
        type: DataTypes.BIGINT
      },
      discountCode: {
        type: DataTypes.STRING
      },
      discountDescription: {
        type: DataTypes.STRING
      },
      validityPeriod:{
        type: DataTypes.JSON
      },
      discountType: {
        type: DataTypes.STRING
      },
      discountValue: {
        type: DataTypes.DECIMAL(8,2)
      }
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "discounts"
    }
)

exports.model = discount;