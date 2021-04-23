const {DataTypes} =  require("sequelize");
const instance = require("../../../dbconnection");


const merchant = instance.sequelize.define("merchants", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      merchantUuid: {
        type: DataTypes.STRING
      },
      accountUuid:{
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      },
      profilePic: {
        type: DataTypes.STRING
      },
      verification: {
        type: DataTypes.STRING
      }
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "merchants"
    }
)

exports.model = merchant;