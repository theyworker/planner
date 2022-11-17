const {
  readLists,
  readList,
  addList,
  updateList,
} = require("../repos/list.repo");

const getLists = async (req, res) => {
  let result = await readLists();
  res.send({ ...result });
};

const getList = async (req, res) => {
  let { listId } = req.query;
  if (listId) {
    let result = await readList(listId);
    res.send({ ...result });
  } else {
    res.send({ sucess: false });
  }
};

const postList = async (req, res) => {
  let { listId, user, name, items } = req.body;
  if (listId && user && name) {
    let listObject = { listId, user, name, items, active: true };
    let result = await addList(listObject);
    res.send({ ...result });
  } else {
    res.send({ sucess: false });
  }
};

const putList = async (req, res) => {
  let { listId, user, items } = req.body;
  if (listId && user ) {
    let listObject = { listId, user, items };
    let result = await updateList(listObject);
    res.send({ ...result });
  } else {
    res.send({ sucess: false });
  }
};

module.exports = { getLists, getList, postList, putList };
