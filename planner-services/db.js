const { mongo_string } = require("./config");

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(mongo_string, (err, client) => {
  // ... do something here
});

exports.getSampleResponse = async () =>
  MongoClient.connect(mongo_string).then((client) => {
    console.log("Connected to the DB");
    // ...
    const db = client.db("sample");
    const quotesCollection = db.collection("sample-col");

    return quotesCollection.find({}).toArray();
    // ...
  });

exports.executeDB = (callBack) =>
  MongoClient.connect(mongo_string).then(callBack);
