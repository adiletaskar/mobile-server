const express = require("express");
const router = express.Router();
const {
  createUser,
  findUser,
  login,
  updateLikes,
  updateCart,
  increment,
  decrement,
} = require("../controllers/users");

//users
router.route("/createUser").post(createUser);
router.route("/login").post(login);
router.route("/findUser=:email").get(findUser);
//likes for users
router.route("/updateLikes/:id").post(updateLikes);
//cart for users
router.route("/updateCart/:id").post(updateCart);
router.route("/updateCartQuantity/increment?").post(increment);
router.route("/updateCartQuantity/decrement?").post(decrement);

module.exports = router;
