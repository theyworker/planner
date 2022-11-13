const { queryDB } = require("./db");

exports.getCalendarData = async () => {
  queryDB(console.log);
  return { story: true };
};
