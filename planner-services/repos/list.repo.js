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
    getListCollection(client).findOne({ listId: listId })
  );
  return { ...result };
};

exports.addList = async (listData) => {
  let result = await executeDB((client) =>
    getListCollection(client).insert({ ...listData, createdAt: new Date() })
  );
  return { ...result };
};

exports.updateList = async (listData) => {
  let result = await executeDB((client) =>
    getListCollection(client).updateOne(
      { listId: listData.listId },
      { $set: { items: listData.items, updatedAt: new Date() } }
    )
  );
  return { ...result };
};
