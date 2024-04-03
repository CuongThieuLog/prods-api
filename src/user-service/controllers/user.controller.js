const UserService = require("../services/user.service");

function UserController() {
  this.find = async (req, res) => {
    return UserService.find(req, res);
  };

  this.register = (req, res) => {
    return UserService.register(req, res);
  };

  this.login = async (req, res) => {
    return UserService.login(req, res);
  };

  this.logout = async (req, res) => {
    return UserService.logout(req, res);
  };

  this.logoutAll = async (req, res) => {
    return UserService.logoutAll(req, res);
  };

  return this;
}

module.exports = new UserController();
