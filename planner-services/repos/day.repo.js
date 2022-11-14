const { executeDB } = require("../db");
const { sendResponse } = require("./utils/repo");

const getDayCollection = (client) => {
  const db = client.db("planner");
  const listCollection = db.collection("day");
  return listCollection;
};

exports.readDay = async (day, month, year, user) => {
  let result = await executeDB((client) =>
    getDayCollection(client).findOne({ day, month, year, user })
  );
  return sendResponse(result);
};

exports.addDay = async (dayData) => {
  let isExist = await executeDB((client) => {
    return getDayCollection(client).findOne({
      year: dayData.year,
      user: dayData.user,
      day: dayData.day,
      month: dayData.month,
    });
  });

  if (isExist) {
    return { message: "Already Exists." };
  } else {
    let result = await executeDB((client) => {
      return getDayCollection(client).insertOne({
        ...dayData,
        createdAt: new Date(),
      });
    });
    return sendResponse(result);
  }
};

exports.updateDay = async (dayData) => {
  let result = await executeDB((client) =>
    getDayCollection(client).updateOne(
      {
        year: dayData.year,
        user: dayData.user,
        day: dayData.day,
        month: dayData.month,
      },
      { $set: { content: dayData.content, updatedAt: new Date() } }
    )
  );
  return sendResponse(result);
};
