const {DataTypes} =  require("sequelize");
const instance = require("../../../dbconnection");


const rating = instance.sequelize.define("ratings", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    accountId: {
        type: DataTypes.BIGINT
    },
    productId:{
        type: DataTypes.BIGINT
    },
    transactionId: {
        type: DataTypes.BIGINT
    },
    rating: {
        type: DataTypes.INTEGER
    },
    review:{
        type: DataTypes.STRING
    },
},
{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "ratings"
}
)

exports.model = rating;