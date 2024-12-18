const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

// get all users

// get user_id by username

// get leader board of points
router.get("/leaderboard", userController.getLeaderBoard)
// if someone add a gift
// 
router.post("/gifts", userController.addUser,userController.getGift, userController.getUserForDup, userController.getUserForAdded, userController.giveGift)
// add users
router.post("/", userController.addUser)
module.exports = router