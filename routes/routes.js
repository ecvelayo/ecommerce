const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//Products Controller
router.post("/create", productController.create);
router.get("/findAll", productController.readAllMerchantProducts);

module.exports = router;