import React, { useEffect, useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import Title from "../subcomponents/Title";
import Item from "../subcomponents/Item";
import SubTitle from "../subcomponents/SubTitle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NewListDialog from "../subcomponents/NewListDialog";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addAllLists } from "../redux/list";

const Home = () => {
  const [openNewListDialog, setOpenNewListDialog] = useState(false);
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const listData = useSelector(
    (state) => state.list.listData || []
  );

  useEffect(
    ()=>{
      axios.get('http://localhost:3300/lists').then(res=>dispatch(addAllLists(res.data.data)))
    },[]
  )

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
          {listData.map((list, index) => (
            <Item
              key={index}
              item={{ text: list.name, ...list }}
              handleItemClick={() => handleItemClick(list.name)}
            />
          ))}
          <AddCircleOutlineIcon
            sx={{ fontSize: 15, paddingTop: "0.5em" }}
            onClick={handleAddClick}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          {/* <Paper>XXX</Paper> */}
        </Grid>
      </Grid>
      <NewListDialog open={openNewListDialog} setOpen={setOpenNewListDialog} />
    </Box>
  );
};
export default Home;
