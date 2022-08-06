import React from "react";
import { Box } from "@mui/material";
import Title from "../subcomponents/Title";

const Home = () => {
  return (
    <Box sx={{ paddingTop: "2em" }}>
      <Title text="planner" />
      Personal <br />
      Work <br />+ Add Category
    </Box>
  );
};
export default Home;
