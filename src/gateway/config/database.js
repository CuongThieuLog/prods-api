let mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.Promise = global.Promise;
    mongoose.connect(
      "mongodb+srv://thieutrancuonglog:16062002@project.rgbybd6.mongodb.net/?retryWrites=true&w=majority&appName=Project"
    );
    console.log("Connect database gateway successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
