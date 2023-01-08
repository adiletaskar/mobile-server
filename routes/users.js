const express = require("express");
const router = express.Router();
const { createUser, findUser, login } = require("../controllers/users");

router.route("/createUser").post(createUser);
router.route("/findUser=:email").get(findUser);
router.route("/login").post(login);

module.exports = router;
