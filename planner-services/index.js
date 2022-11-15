const express = require("express");
const cors = require('cors')
const { node_port } = require("./config");
const { getday, postday } = require("./services/day.service");
const {
  getLists,
  getList,
  postList,
  putList,
} = require("./services/list.service");
const { getyear, postyear, putyear } = require("./services/year.service");
const app = express();
app.use (cors())

app.use(express.json());

// -- List Endpoints --
app.get("/lists", getLists);
app.get("/list", getList);
app.post("/list", postList);
app.put("/list", putList);

// -- Year Endpoints --
app.get("/year", getyear);
app.post("/year", postyear);
app.put("/year", putyear);

// -- Day Endpoints --
app.get("/day", getday);
app.post("/day", postday);
app.put("/day", putyear);

app.listen(node_port, function () {
  console.log("listening on port: ", node_port);
});
