const Order = require("../models/order.model");
const Product = require("../../product-service/models/product.model");

function OrderController() {
  // Tất cả đơn hàng
  this.getAll = async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json({ data: orders });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // Tạo đơn hàng
  this.create = async (req, res) => {
    try {
      const { products, shippingAddress } = req.body;
      const userId = req.user._id;

      let total = 0;
      const orderProducts = [];

      for (const item of products) {
        const product = await Product.findById(item.productId);
        if (!product) {
          return res.status(404).json({ message: "Not Found!" });
        }
        total += product.price * item.quantity;
        orderProducts.push({
          product: item.productId,
          quantity: item.quantity,
          price: product.price,
        });
      }

      const order = new Order({
        user: userId,
        products: orderProducts,
        total,
        shippingAddress,
        status: "PENDING",
      });

      await order.save();

      for (const item of products) {
        const product = await Product.findById(item.productId);
        if (product) {
          product.quantity -= item.quantity;
          await product.save();
        }
      }

      res.status(201).json({ message: "Order created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error" });
    }
  };

  // Tất cả đơn hàng và trạng thái đơn hàng của user đang đăng nhập
  this.getAllOrderMySelf = async (req, res) => {
    try {
      const userId = req.user._id;
      let query = { user: userId };
      const status = req.query.status;
      if (
        status &&
        ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELED"].includes(
          status
        )
      ) {
        query.status = status;
      }
      const orders = await Order.find(query);
      res.status(200).json({ orders });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error" });
    }
  };

  // Cập nhật trạng thái của đơn hàng
  this.updateOrderStatus = async (req, res) => {
    try {
      const { status } = req.body;

      if (
        !["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELED"].includes(
          status
        )
      ) {
        return res.status(404).json({ message: "Status Not Found!" });
      }
      const updatedStatus = await Order.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );
      if (!updatedStatus) {
        return res.status(404).json({ message: "Not Found!" });
      }
      res
        .status(200)
        .json({ message: "Updated successfully", data: updatedStatus });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // Tính tổng doanh thu
  this.calculateTotalProfit = async (req, res) => {
    try {
      const orders = await Order.find({ status: "DELIVERED" });
      let totalRevenue = 0;

      for (const order of orders) {
        for (const item of order.products) {
          const product = await Product.findById(item.product);
          totalRevenue += item.quantity * product.price;
        }
      }

      res.status(200).json({ totalRevenue });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Tính tổng lợi nhuận
  this.calculateTotalIncome = async (req, res) => {
    try {
      const orders = await Order.find({ status: "DELIVERED" });
      let totalProfit = 0;

      for (const order of orders) {
        for (const item of order.products) {
          const product = await Product.findById(item.product);
          totalProfit +=
            item.quantity * product.price - item.quantity * product.cost;
        }
      }

      res.status(200).json({ totalProfit });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  return this;
}

module.exports = new OrderController();
