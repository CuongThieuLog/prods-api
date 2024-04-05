const User = require("../models/user.model");

function UserController() {
  this.find = async (req, res) => {
    return res.send(req.user);
  };

  this.register = (req, res) => {
    try {
      let user = new User();

      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;

      user
        .save()
        .then(function () {
          return res.json({ user: user.toAuthJSON() });
        })
        .catch(function (error) {
          return res.status(400).json(error);
        });
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  this.getAll = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ data: users });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  return this;
}

module.exports = UserController();
