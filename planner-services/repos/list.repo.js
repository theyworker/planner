const { executeDB } = require("../db");
const { sendResponse } = require("./utils/repo");

const getListCollection = (client) => {
  const db = client.db("planner");
  const listCollection = db.collection("list");
  return listCollection;
};


exports.readLists = async () => {
  let result = await executeDB((client) =>
    getListCollection(client).find({}).toArray()
  );
  return sendResponse(result);
};

exports.readList = async (listId) => {
  let result = await executeDB((client) =>
    getListCollection(client).findOne({ listId: listId })
  );
  return sendResponse(result);
};

exports.addList = async (listData) => {
  let result = await executeDB((client) =>
    getListCollection(client).insertOne({ ...listData, createdAt: new Date() })
  );
  return sendResponse(result);
};

exports.updateList = async (listData) => {
  let result = await executeDB((client) =>
    getListCollection(client).updateOne(
      { listId: listData.listId },
      { $set: { items: listData.items, updatedAt: new Date() } }
    )
  );
  return sendResponse(result);
};
