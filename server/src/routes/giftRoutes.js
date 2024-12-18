const express = require("express");
const router = express.Router();
const giftController = require("../controllers/giftController")

router.get("/", giftController.getAllGift)

module.exports = router