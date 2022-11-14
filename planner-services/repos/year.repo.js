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
  let result = await executeDB((client) => {
    // let isExist = getYearCollection(client).findOne({
    //   year: yearData.year,
    //   user: yearData.user,
    // });
    // if(isExist){
    //   return { message: 'Already Exists'}
    // }
    // else{}

    return getYearCollection(client).insertOne({
      ...yearData,
      createdAt: new Date(),
    });
  });
  return { ...result };
};

// exports.updateList = async (listData) => {
//   let result = await executeDB((client) =>
//     getYearCollection(client).updateOne(
//       { listId: listData.listId },
//       { $set: { items: listData.items, updatedAt: new Date() } }
//     )
//   );
//   return { ...result };
// };
