const product = require("../models/productModel").model;
// const Sequelize = require("sequelize")

exports.create = async (req, res) => {
    try{
        //create SKU based on Merchant ID and Name
        if (typeof req.body.sku === 'undefined'){
            req.body.sku = generateSKU();
        }
        product.create(req.body)
        .then((data)=>{
            //returns inserted data with all fields
            res.send(data);
        }).catch((err)=>{
            res.send(err)
        })
    }catch(e){
        res.send(err);
    }
}

exports.readOne = async (req, res) => {
    try{
        product.findOne({
            where: {
                merchantId: req.body.merchant,
                sku: req.body.sku
            }
        }).then((data)=>{
            return data;
        }).catch((err)=>{
            return err;
        });
    }catch(e){
        return e
    }
}

//returns all products under merchant
exports.readAllMerchantProducts = async (req, res) => {
    try{
        let conditions = {where: {merchantId: req.body.merchantId}};
        if (req.body.limit !== undefined){
            conditions.limit = req.body.limit;
        }
        if (req.body.offset !== undefined){
            conditions.offset = req.body.offset
        }
        if (req.body.order !== undefined){
            conditions.order = req.body.order
        }
        let products = product.findAll(
            conditions
        ).then((data)=>{
            return data;
        }).catch((err)=>{
            return err;
        })
        return products;
    }catch(e){
        return e;
    }
}

exports.update = async (req, res) => {

}

exports.delete = async (req, res) => {
    
}

generateSKU = () => {
    //generate random SKU for barcode purposes
    let sku = "";
    const numbers = "1234567890";
    const length = 10;
    for (var i = 0; i < length; i++){
        sku += numbers.charAt(Math.floor(Math.random()*numbers.length));
    }
    if (checkExists({sku:sku})){
        return sku;
    }else{
        generateSKU();
    }
}

checkExists = (data) => {
    //checks if SKU already exists
    let verif = product.findOne({
        where: data,
        raw: true
    }).then((data)=>{
        if (data === null){
            console.log("Test here");
            return true;
        }else{
            return false;
        }
    })
    return verif;
}