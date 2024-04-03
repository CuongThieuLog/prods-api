const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const productsResponse = await axios.get("http://localhost:8001/product");
    res.json(productsResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
