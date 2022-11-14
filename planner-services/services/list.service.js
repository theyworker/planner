const { readLists, readList } = require("../repos/list.repo");

const getLists = async (req, res) => {
  let result = await readLists();
  res.send({ sucess: true, ...result });
};

const getList = async (req, res) => {
  let { listId } = req.query;
  if (listId) {
    let result = await readList(listId);
    res.send({ sucess: true, ...result });
  } else {
    res.send({ sucess: false });
  }
};

module.exports = { getLists, getList };
