import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Title from "../subcomponents/Title";

const List = () => {
  const { list } = useParams();
  const { categories } = useSelector((state) => state.listCategories || []);

  const checkListValid = () =>
    categories && categories.filter((category) => category.name == list);

  useEffect(() => {
    console.log("listCategories", categories);
    console.log(checkListValid());
  }, []);
  return (
    <Box sx={{ paddingTop: "2em" }}>
      <Title text={list} />{" "}
    </Box>
  );
};

export default List;
