const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  // ... do something here
});

exports.getSampleResponse = async () =>
  MongoClient.connect("mongodb://localhost:27017").then((client) => {
    console.log('Connected to the DB');
    // ...
    const db = client.db("sample");
    const quotesCollection = db.collection("sample-col");

    
    return quotesCollection.find({}).toArray();
    // ...
  });
