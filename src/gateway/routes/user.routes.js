const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/register", async (req, res) => {
  try {
    const registerData = req.body;
    const registerResponse = await axios.post(
      "http://localhost:8002/register",
      registerData
    );
    res.json(registerResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to register" });
  }
});

router.get("user/me", async (req, res) => {
  try {
    const meResponse = await axios.post("http://localhost:8002/user/me", null, {
      headers: { Authorization: req.headers.authorization },
    });
    res.json(meResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch me" });
  }
});

module.exports = router;
