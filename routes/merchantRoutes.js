const express = require("express");
const router = express.Router();
const merchantController = require("../controllers/merchantController");
const authController = require("../../auth/auth");

//Merchants Controller 
router.post("/create", merchantController.create);

module.exports = router;