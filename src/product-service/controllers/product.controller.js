const ProductService = require("../services/product.service");

function ProductController() {
  this.getAll = (req, res) => {
    return ProductService.getAll(req, res);
  };

  return this;
}

module.exports = new ProductController();
