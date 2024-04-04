const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/login", async (req, res) => {
  try {
    const loginData = req.body;
    const loginRes = await axios.post("http://localhost:8001/login", loginData);
    res.json(loginRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error login!" });
  }
});

router.post("/logout", async (req, res) => {
  try {
    const logoutRes = await axios.post("http://localhost:8001/logout", null, {
      headers: { Authorization: req.headers.authorization },
    });
    res.json(logoutRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error logout!" });
  }
});

router.post("/logoutAll", async (req, res) => {
  try {
    const logoutAllResponse = await axios.post(
      "http://localhost:8001/logoutAll",
      null,
      {
        headers: { Authorization: req.headers.authorization },
      }
    );
    res.json(logoutAllResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to logout from all devices" });
  }
});
module.exports = router;
