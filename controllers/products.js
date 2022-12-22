const products = require("../data");
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const sortedProducts = await Product.find({});
    if (sortedProducts.length > 0) {
      return res.json({ success: true, data: sortedProducts });
    }
    res.json({ success: false });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSortedProducts = async (req, res) => {
  try {
    const { name } = req.params;
    const sortedProducts = await Product.find({ name: { $regex: name } });
    if (sortedProducts.length > 0) {
      return res.json({ success: true, data: sortedProducts });
    }
    res.json({ success: false });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createProducts = async (req, res) => {
  try {
    const productList = await Product.insertMany(req.body);
    res.status(201).json({ productList });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createSingleProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getProducts,
  createProducts,
  getSortedProducts,
  createSingleProduct,
};
