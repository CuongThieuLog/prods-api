let router = require("express").Router();
const OrderController = require("../controllers/order.controller");
const auth = require("../../middleware/auth.middleware");
const roleAdmin = require("../../middleware/admin.middleware");

//private
router.post("/", auth, OrderController.create);
router.get("/my-self", auth, OrderController.getAllOrderMySelf);
router.put(
  "/update-status/:id",
  auth,
  roleAdmin,
  OrderController.updateOrderStatus
);

module.exports = router;
