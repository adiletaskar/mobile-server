const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProducts,
  getSortedProducts,
  createSingleProduct,
} = require("../controllers/products");

router.route("/").get(getProducts).post(createProducts);
router.route("/:name").get(getSortedProducts);
router.route("/singleProduct").post(createSingleProduct);
module.exports = router;
