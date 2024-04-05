let router = require("express").Router();
let UserController = require("../controllers/user.controller");
const auth = require("../../middleware/auth.middleware");

router.post("/register", UserController.register);

// private
router.get("/user/me", auth, UserController.find);

module.exports = router;
