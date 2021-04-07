const product = require("../models/productModel");

exports.testing = async (req, res) => {
    let productData = await product.model.findOne({

    });
    res.send(productData);
}