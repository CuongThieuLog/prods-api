let router = require("express").Router();
const UserController = require("../controllers/user.controller");

router.get("/register", UserController.register);
router.get("/login", UserController.login);
router.get("/user/logout", UserController.logout);
router.get("/user/logout-all", UserController.logoutAll);
router.get("/me", UserController.find);

module.exports = router;
