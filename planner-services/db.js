const { mongo_string } = require("./config");

const MongoClient = require("mongodb").MongoClient;

exports.executeDB = (callBack) =>
  MongoClient.connect(mongo_string).then(callBack);
