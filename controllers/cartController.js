const model = require("../models/cartModel").model;
const account = require("../../account/models/accountModel").model;


exports.create = async (req, res) => {
    try{
        if (req.body.accountId !== "undefined"){

        }
        model.findOrCreate({
            where: {
                accountId: req.body.accountId
            },
            defaults:req.body
        })
        .then((data)=>{
            //returns inserted data with all fields
            res.send(data);
        }).catch((err)=>{
            res.send(err)
        })
    }catch(e){
        res.send(e);
    }
}

exports.readOne = async (req, res) => {
    try{
        model.findOne({
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

//update based on SKU
//JSON sent should be on this format
//{sku: itemSku, updatedValue: values_to_be_updated_in_JSON_format, return: true if you want to return updatedRow, by default is false }
exports.update = async (req, res) => {
    try{
        const updatedProduct = await model.update(req.body.updatedValue,
        {
            where: {
                sku: req.body.sku
            },
            returning: true,
            plain: true
        }).then(async (updated)=>{
            if (req.body.return){
                let returnVal = {status: updated[1]};
                returnVal.updated = await model.findOne({
                    where:{
                        sku: req.body.sku
                    },
                    raw: true
                })
                return returnVal;
            }else{
                return {status: updated[1]};
            }
        }).catch((err)=>{
            return err;
        })
        res.send(updatedProduct);
    }catch(e){
        res.send(e);
    }
}

//delete a product via SKU
exports.delete = async (req, res) => {
    try{
        const deletedProduct = await model.delete({
            where: {
                sku: req.body.sku
            }
        }).then((data)=>{
            return data;
        }).catch((err)=>{
            return err;
        })
        res.send(deletedProduct)
    }catch(e){
        res.send(e)
    }
}
