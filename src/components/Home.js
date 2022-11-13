import React, { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import Title from "../subcomponents/Title";
import Item from "../subcomponents/Item";
import SubTitle from "../subcomponents/SubTitle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NewListDialog from "../subcomponents/NewListDialog";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [openNewListDialog, setOpenNewListDialog] = useState(false);
  let navigate = useNavigate();
  const listCategories = useSelector(
    (state) => state.listCategories.categories || []
  );

  const handleAddClick = () => setOpenNewListDialog(true);
  const handleItemClick = (listName) =>
    navigate(`../list/${listName}`, { replace: true });

  return (
    <Box sx={{ paddingTop: "2em" }}>
      <Title text="Home" />

      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <SubTitle text="Lists" />
          {/* <Item item={{ text: "Personal" }} /> */}
          {listCategories.map((category, index) => (
            <Item
              key={index}
              item={{ text: category.name }}
              handleItemClick={() => handleItemClick(category.name)}
            />
          ))}
          <AddCircleOutlineIcon
            sx={{ fontSize: 15, paddingTop: "0.5em" }}
            onClick={handleAddClick}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Paper>XXX</Paper>
        </Grid>
      </Grid>
      <NewListDialog open={openNewListDialog} setOpen={setOpenNewListDialog} />
    </Box>
  );
};
export default Home;
