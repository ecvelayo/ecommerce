const express = require("express");
const router = express.Router();
const productController = require("../controllers/ecommerceController");

router.get("/testing", productController.testing);

module.exports = router;