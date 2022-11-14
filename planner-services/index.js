const express = require("express");
const bodyParser = require("body-parser");
const { getSampleResponse } = require("./db");
const { node_port } = require("./config");
const { getCalendarData } = require("./calendar.repo");
const { getLists } = require("./services/list.service");
const app = express();

app.get("/calendar/day", async function (req, res) {
  let response = await getSampleResponse();

  console.log("$$$$$$", response);
  res.send(response);
});
app.get("/calendar/week", async function (req, res) {
  let response = await getCalendarData();

  console.log(">>", response);
  res.send(response);
});

app.get("/lists", getLists);

app.listen(node_port, function () {
  console.log("listening on port: ", node_port);
});
