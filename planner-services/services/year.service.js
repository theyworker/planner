const { readYear, addYear, updateYear } = require("../repos/year.repo");

const getyear = async (req, res) => {
  let { year, user } = req.query;

  if (year && user) {
    let yearInt = parseInt(year);
    let result = await readYear(yearInt, user);
    res.send({ ...result });
  } else {
    res.send({ success: false });
  }
};

const postyear = async (req, res) => {
  let { year, user, content } = req.body;
  if (year && user && content) {
    let yearObject = { year, user, content };
    let result = await addYear(yearObject);
    res.send({ ...result });
  } else {
    res.send({ success: false });
  }
};

const putyear = async (req, res) => {
  let { year, user, content } = req.body;
  if ((year, user, content)) {
    let yearObject = { year, user, content };
    let result = await updateYear(yearObject);
    res.send({ ...result });
  } else {
    res.send({ success: false });
  }
};

module.exports = {
  getyear,
  postyear,
  putyear,
};
