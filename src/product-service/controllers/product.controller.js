const ProductService = require("../services/product.service");

function ProductController() {
  this.create = async (req, res) => {
    return ProductController.create(req, res);
  };

  this.getAll = async (req, res) => {
    return ProductService.getAll(req, res);
  };

  this.getById = async (req, res) => {
    return ProductService.getById(req, res);
  };

  this.update = async (req, res) => {
    return ProductService.update(req, res);
  };

  this.delete = async (req, res) => {
    return ProductService.delete(req, res);
  };

  this.getRemainingQuantity = async (req, res) => {
    return ProductService.getRemainingQuantity(req, res);
  };

  return this;
}

module.exports = new ProductController();
