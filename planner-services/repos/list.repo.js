const { executeDB } = require("../db");

const getListCollection = (client) => {
  const db = client.db("planner");
  const listCollection = db.collection("list");
  return listCollection;
};

exports.readLists = async () => {
  let result = await executeDB((client) =>
    getListCollection(client).find({}).toArray()
  );
  return { ...result };
};

exports.readList = async (listId) => {
  let result = await executeDB((client) =>
    getListCollection(client).findOne({ "listId": listId })
  );
  return { ...result };
};
