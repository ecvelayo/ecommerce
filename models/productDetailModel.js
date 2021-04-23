const {DataTypes} =  require("sequelize");
const instance = require("../../../dbconnection");


const productDetail = instance.sequelize.define("product_details", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      productId: {
        type: DataTypes.BIGINT
      },
      variation: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.STRING
      },
      quantity: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      }
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "product_details"
    }
)

exports.model = productDetail;