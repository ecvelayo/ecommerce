const {DataTypes} =  require("sequelize");
const instance = require("../../../dbconnection");


const cart = instance.sequelize.define("carts", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    accountId: {
        type: DataTypes.BIGINT
    },
    cartContent:{
        type: DataTypes.BIGINT
    },
},
{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "carts"
}
)

exports.model = cart;