const {DataTypes} =  require("sequelize");
const instance = require("../../../dbconnection");


const product = instance.sequelize.define("products", {
  id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    merchantId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sku: {
      type: DataTypes.STRING,
      unique: true
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productPrimaryImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productImages: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
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