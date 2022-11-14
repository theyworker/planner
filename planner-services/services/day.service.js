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
    res.send({ sucess: true, ...result });
  } else {
    res.send({ sucess: false });
  }
};

const postday = async (req, res) => {
  let { day, month, year, user, content } = req.body;
  if (day && month && year && user && content) {
    let dayObject = { day, month, year, user, content };
    let result = await addDay(dayObject);
    res.send({ sucess: true, ...result });
  } else {
    res.send({ sucess: false });
  }
};

const putday = async (req, res) => {
  let { day, month, year, user, content } = req.body;
  if (day && month && year && user && content) {
    let dayObject = { day, month, year, user, content };
    let result = await updateDay(dayObject);
    res.send({ sucess: true, ...result });
  } else {
    res.send({ sucess: false });
  }
};

module.exports = { getday, postday, putday };
