const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const params = req.query;
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    let apiUrl = "http://localhost:8004/category";
    if (params.name) {
      apiUrl += `?name=${params.name}`;
    }
    const categoryRes = await axios.get(apiUrl, {
      headers,
    });
    res.json(categoryRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error category!" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const categoryRes = await axios.get(
      `http://localhost:8004/category/${categoryId}`,
      {
        headers,
      }
    );
    res.json(categoryRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error category!" });
  }
});

router.post("/", async (req, res) => {
  try {
    const categoryData = req.body;
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const newCategoryRes = await axios.post(
      "http://localhost:8004/category",
      categoryData,
      { headers }
    );
    res.json(newCategoryRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error category!" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryData = req.body;
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const updateCategoryRes = await axios.put(
      `http://localhost:8004/category/${categoryId}`,
      categoryData,
      { headers }
    );
    res.json(updateCategoryRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error category!" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const deleteCategoryRes = await axios.delete(
      `http://localhost:8004/category/${categoryId}`,
      { headers }
    );
    res.json(deleteCategoryRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error category!" });
  }
});

module.exports = router;
