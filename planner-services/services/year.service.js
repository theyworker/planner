const { readYear, addYear, updateYear } = require("../repos/year.repo");

const getyear = async (req, res) => {
  let { year, user } = req.query;

  if (year && user) {
    let yearInt = parseInt(year);
    let result = await readYear(yearInt, user);
    res.send({ sucess: true, ...result });
  } else {
    res.send({ sucess: false });
  }
};

const postyear = async (req, res) => {
  let { year, user, content } = req.body;
  if (year && user && content) {
    let yearObject = { year, user, content };
    let result = await addYear(yearObject);
    res.send({ sucess: true, ...result });
  } else {
    res.send({ sucess: false });
  }
};

const putyear = async (req, res) => {
  let { year, user, content } = req.body;
  if ((year, user, content)) {
    let yearObject = { year, user, content };
    let result = await updateYear(yearObject);
    res.send({ sucess: true, ...result });
  } else {
    res.send({ sucess: false });
  }
};

module.exports = {
  //  getyears,
  getyear,
  postyear,
  putyear,
};
