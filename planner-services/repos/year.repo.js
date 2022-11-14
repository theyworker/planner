const { executeDB } = require("../db");

const getYearCollection = (client) => {
  const db = client.db("planner");
  const listCollection = db.collection("year");
  return listCollection;
};

exports.readYear = async (year, user) => {
  let result = await executeDB((client) =>
    getYearCollection(client).findOne({ year, user })
  );
  return { ...result };
};

exports.addYear = async (yearData) => {
  let isExist = await executeDB((client) => {
    return getYearCollection(client).findOne({
      year: yearData.year,
      user: yearData.user,
    });
  });

  if (isExist) {
    return { message: "Already Exists." };
  } else {
    let result = await executeDB((client) => {
      return getYearCollection(client).insertOne({
        ...yearData,
        createdAt: new Date(),
      });
    });
    return { ...result };
  }
};

exports.updateYear = async (yearData) => {
  let result = await executeDB((client) =>
    getYearCollection(client).updateOne(
      { year: yearData.year, user: yearData.user },
      { $set: { content: yearData.content, updatedAt: new Date() } }
    )
  );
  return { ...result };
};
