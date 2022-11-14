const { readLists } = require("../repos/list.repo");

const getLists = async (req, res) => {
  let result = await readLists();
  res.send({ sucess: true, ...result });
};

module.exports = { getLists };
