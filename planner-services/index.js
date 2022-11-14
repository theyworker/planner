const express = require("express");
const { node_port } = require("./config");
const {
  getLists,
  getList,
  postList,
  putList,
} = require("./services/list.service");
const { getyear, postyear } = require("./services/year.service");
const app = express();

app.use(express.json());

// -- List Endpoints --
app.get("/lists", getLists);
app.get("/list", getList);
app.post("/list", postList);
app.put("/list", putList);

app.get("/year", getyear);
app.post("/year", postyear);

app.listen(node_port, function () {
  console.log("listening on port: ", node_port);
});
