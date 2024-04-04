const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/register", async (req, res) => {
  try {
    const registerData = req.body;
    const registerRes = await axios.post(
      "http://localhost:8002/register",
      registerData
    );
    res.json(registerRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error register!" });
  }
});

router.get("/user/me", async (req, res) => {
  try {
    const meRes = await axios.get("http://localhost:8002/user/me", {
      headers: { Authorization: req.headers.authorization },
    });
    res.json(meRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error get me!" });
  }
});

module.exports = router;
