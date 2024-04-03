const Product = require("../models/product.model");

function ProductService() {
  this.getAll = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({ data: products });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  return this;
}

module.exports = new ProductService();
