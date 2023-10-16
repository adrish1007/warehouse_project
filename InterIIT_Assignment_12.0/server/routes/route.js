const express = require("express");
const bodyParser = require("body-parser");
const userController = require("../controllers/userController");
const router = express.Router();

const jsonParser = bodyParser.json();

router.post("/Users/Login", jsonParser, userController.user_info);
router.post("/Users/Create", jsonParser, userController.create_user);
router.get("/Users/Get", jsonParser, userController.all_users);

module.exports = router;
