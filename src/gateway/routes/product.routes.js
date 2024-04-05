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
    const productsRes = await axios.get("http://localhost:8003/product", {
      headers,
    });
    res.json(productsRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetch products!" });
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
    const productRes = await axios.get(
      `http://localhost:8003/product/${productId}`,
      {
        headers,
      }
    );
    res.json(productRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetch products by id!" });
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
    const newProductRes = await axios.post(
      "http://localhost:8003/product",
      productData,
      { headers }
    );
    res.json(newProductRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error create product!" });
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
    const updatedProductRes = await axios.put(
      `http://localhost:8003/product/${productId}`,
      productData,
      { headers }
    );
    res.json(updatedProductRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetch update product" });
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
    const deleteProductRes = await axios.delete(
      `http://localhost:8003/product/${productId}`,
      { headers }
    );
    res.json(deleteProductRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetch delete product" });
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
    res.status(500).json({ error: "Error fetch remaining quantity product!" });
  }
});

module.exports = router;
