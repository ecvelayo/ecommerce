const {DataTypes} =  require("sequelize");
const instance = require("../../../dbconnection");


const branch = instance.sequelize.define("branches", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      merchantId: {
        type: DataTypes.BIGINT
      },
      branchName: {
        type: DataTypes.STRING
      },
      latitude: {
        type: DataTypes.STRING
      },
      longitude: {
        type: DataTypes.STRING
      },
      locationDetails: {
        type: DataTypes.STRING
      },
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "branches"
    }
)

exports.model = branch;