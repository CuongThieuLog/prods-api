const express = require("express");

const productRoutes = require("./product.routes");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");

const router = express.Router();

router.use("/product/", productRoutes);
router.use("/", authRoutes);
router.use("/", userRoutes);

module.exports = router;
