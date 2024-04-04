const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }

    const productsResponse = await axios.get("http://localhost:8003/product", {
      headers,
    });
    res.json(productsResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const productResponse = await axios.get(
      `http://localhost:8003/product/${productId}`,
      {
        headers,
      }
    );
    res.json(productResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by id" });
  }
});

router.post("/", async (req, res) => {
  try {
    const productData = req.body;
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const newProductResponse = await axios.post(
      "http://localhost:8003/product",
      productData,
      { headers }
    );
    res.json(newProductResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const updatedProductResponse = await axios.put(
      `http://localhost:8003/product/${productId}`,
      productData,
      { headers }
    );
    res.json(updatedProductResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const deleteProductResponse = await axios.delete(
      `http://localhost:8003/product/${productId}`,
      { headers }
    );
    res.json(deleteProductResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

router.get("/remaining-quantity/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const remainingQuantityRes = await axios.get(
      `http://localhost:8003/product/remaining-quantity/${productId}`,
      { headers }
    );
    res.json(remainingQuantityRes.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to remaining quantity product" });
  }
});

module.exports = router;
