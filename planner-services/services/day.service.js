const { readDay, addDay, updateDay } = require("../repos/day.repo");

const getday = async (req, res) => {
  let { day, month, year, user } = req.query;

  if (year && user && day && month) {
    let [dayInt, monthInt, yearInt] = [
      parseInt(day),
      parseInt(month),
      parseInt(year),
    ];
    let result = await readDay(dayInt, monthInt, yearInt, user);
    res.send({ ...result });
  } else {
    res.send({ success: false });
  }
};

const postday = async (req, res) => {
  let { day, month, year, user, content } = req.body;
  if (day && month && year && user && content) {
    let dayObject = { day, month, year, user, content };
    let result = await addDay(dayObject);
    res.send({ ...result });
  } else {
    res.send({ success: false });
  }
};

const putday = async (req, res) => {
  let { day, month, year, user, content } = req.body;
  if (day && month && year && user && content) {
    let dayObject = { day, month, year, user, content };
    let result = await updateDay(dayObject);
    res.send({ ...result });
  } else {
    res.send({ success: false });
  }
};

module.exports = { getday, postday, putday };
