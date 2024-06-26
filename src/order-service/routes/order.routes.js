let router = require("express").Router();
const OrderController = require("../controllers/order.controller");
const auth = require("../../middleware/auth.middleware");
const roleAdmin = require("../../middleware/admin.middleware");

//private
router.get("/", auth, roleAdmin, OrderController.getAll);
router.post("/", auth, OrderController.create);
router.post("/:id", auth, OrderController.deleteOrder);
router.get("/my-self", auth, OrderController.getAllOrderMySelf);
router.put(
  "/update-status/:id",
  auth,
  roleAdmin,
  OrderController.updateOrderStatus
);
router.get("/profit", auth, roleAdmin, OrderController.calculateTotalProfit);
router.get("/income", auth, roleAdmin, OrderController.calculateTotalIncome);

module.exports = router;
