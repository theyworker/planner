const { queryDB, executeDB } = require("./db");

exports.getCalendarData = async () => {

  let result2 = await executeDB((client) => {
    console.log("Connected to the DB");
    // ...
    const db = client.db("sample");
    const quotesCollection = db.collection("sample-col");

    return quotesCollection.find({}).toArray();

    // ...
  });


  return { story: true, ...result2 };
};
