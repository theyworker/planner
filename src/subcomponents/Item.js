import { Paper } from "@mui/material";
import React from "react";

const Item = ({ item, index, handleItemClick, uuid }) => (
  <Paper
    key={index}
    onClick={() => handleItemClick(item[uuid])}
    sx={{
      textDecoration: item.active ? "" : "line-through",
      textDecorationThickness: "0.05rem",
      background: "#000",
      color: "#FFF",
      fontSize: "1em",
    }}
    elevation={0}
  >
    {item.text}
  </Paper>
);

export default Item;
