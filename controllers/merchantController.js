const model = require("../models/merchantModel").model;
const generateCode = require("../../gencode/codegen").generateCode;

exports.create = async (req, res) => {
    try{
        req.body.merchantUuid = await generateCode("16","alphanumeric",merchant,"merchantUuid");
        const data = model.create(req.body)
        .then((data)=>{
            return data;
        }).catch((err)=>{
            return err;
        })
        res.send(data);
    }catch(e){
        res.send(e);
    }   
}

exports.readOne = async (req, res) =>{
    //pass req.body.raw if reading via primary key ID, else read via UUID
    try{
        if (req.body.raw){
            const data = model.findOne({
                where: {
                    id: req.body.id
                }
            }).then((data)=>{
                return data;
            }).catch((err)=>{
                return err;
            })
            res.send(data);
        }else{
            const data = model.findOne({
                where: {
                    merchantUuid: req.body.merchantCode
                }
            }).then((data)=>{
                return data;
            }).catch((err)=>{
                return err;
            })
            res.send(data);
        }
    }catch(e){
        res.send(e);
    }
}

exports.update = async (req, res) => {
    try{
        if (req.body.updatedValue.merchantUuid !== "undefined" && req.body.updatedValue.accountUuid !== "undefined"){
            throw {error: true, message: "Invalid values passed. Please try again."}
        }
        const updatedProduct = await model.update(req.body.updatedValue,
        {
            where: {
                merchantUuid: req.body.merchantCode,
                accountUuid: req.body.accountCode
            },
            returning: true,
            plain: true
        }).then(async (updated)=>{
            //console.log(updated[1]);
            //res.send({status: updated[1]});
            if (req.body.return){
                let returnVal = {status: updated[1]};
                returnVal.updated = await model.findOne({
                    where:{
                        merchantUuid: req.body.merchantCode
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

exports.delete = async (req, res) => {
    try{
        const deleted = await model.delete({
            where: {
                sku: req.body.sku
            }
        }).then((data)=>{
            return data;
        }).catch((err)=>{
            return err;
        })
        res.send(deleted);
    }catch(e){
        res.send(e);
    }
}