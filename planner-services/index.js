const express = require("express");
const { node_port } = require("./config");
const {
  getLists,
  getList,
  postList,
  putList,
} = require("./services/list.service");
const app = express();
app.use(express.json());
// -- List Endpoints --
app.get("/lists", getLists);
app.get("/list", getList);
app.post("/list", postList);
app.put("/list", putList);

app.listen(node_port, function () {
  console.log("listening on port: ", node_port);
});
