const config = require("./../config.json");
const mongoose = require("mongoose");

const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}

mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions)
  .then(() => {
    console.log('Connection with mongodb successful');
  }).catch((err) => {
    console.log(`Error while connecting to mongodb: ${err.message}`);
  });

mongoose.Promise = global.Promise;

module.exports = {
  User: require("../users/user.model")
}
