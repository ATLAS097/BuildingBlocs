const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes")
const giftRoutes = require("./giftRoutes")

router.use("/users", userRoutes)
router.use("/gifts", giftRoutes)
module.exports =router;