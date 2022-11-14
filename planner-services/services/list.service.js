const { readLists, readList } = require("../repos/list.repo");

const getLists = async (req, res) => {
  let result = await readLists();
  res.send({ sucess: true, ...result });
};

const getList = async (req, res) => {
  let result = await readList("213");
  res.send({ sucess: true, ...result });
};

module.exports = { getLists, getList };
