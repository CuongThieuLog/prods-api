const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  try {
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const orderData = req.body;
    const newOrderRes = await axios.get(
      `http://localhost:8005/order`,
      orderData,
      {
        headers,
      }
    );
    res.json(newOrderRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetch create order!" });
  }
});

router.get("/my-self", async (req, res) => {
  try {
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const orderByUserRes = await axios.get(
      `http://localhost:8005/order/my-self`,
      {
        headers,
      }
    );
    res.json(orderByUserRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetch order by user!" });
  }
});

router.put("/update-status/:id", async (req, res) => {
  try {
    let headers = {};
    if (req.headers.authorization) {
      headers = {
        Authorization: req.headers.authorization.replace("Bearer ", ""),
      };
    }
    const orderId = req.params.id;
    const { status } = req.body;
    const orderUpdateStatusRes = await axios.put(
      `http://localhost:8005/order/update-status/${orderId}`,
      status,
      {
        headers,
      }
    );
    res.json(orderUpdateStatusRes.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetch update status order!" });
  }
});

module.exports = router;
