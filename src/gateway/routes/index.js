const express = require("express");

const productRoutes = require("./product.routes");
const authRoutes = require("./auth.routes");

const router = express.Router();

router.use("/product/", productRoutes);
router.use("/", authRoutes);

module.exports = router;
