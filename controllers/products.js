const products = require("../data");

const getProducts = (req, res) => {
  const { title } = req.query;
  const sortedProducts = products.filter((product) =>
    product.name.includes(title.toLowerCase())
  );
  if (sortedProducts.length > 0) {
    return res.json({ success: true, data: sortedProducts });
  }
  res.json({ success: false });
};
module.exports = {
  getProducts,
};
