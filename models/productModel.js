const {DataTypes} =  require("sequelize");
const instance = require("../../../dbconnection");


const product = instance.sequelize.define("products", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      merchantId: {
        type: DataTypes.BIGINT
      },
      sku: {
        type: DataTypes.STRING
      },
      productName: {
        type: DataTypes.STRING
      },
      productDescription: {
        type: DataTypes.STRING
      },
      productPrimaryImage: {
        type: DataTypes.STRING
      },
      productImages: {
        type: DataTypes.TEXT
      },
      status: {
        type: DataTypes.STRING
      }
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "products"
    }
)

exports.model = product;