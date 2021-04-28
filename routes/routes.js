const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authController = require("../../auth/auth");

//Products Controller
router.post("/create", productController.create);
router.get("/findAll", productController.readAllMerchantProducts);
router.post("/update", authController.transactionalAuth, productController.update);
module.exports = router;

