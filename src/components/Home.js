import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/today";

const Today = () => {
  const [inputValue, setInputValue] = useState("");
  const list = useSelector((state) => state.today.data || []);

  const dispatch = useDispatch();

  const addNewValue = () => {
    let newVal = inputValue;
    setInputValue("");
    dispatch(addItem(newVal));
  };

  return (
    <Box>
      {" "}
      <Typography variant="h2" component="div" gutterBottom textAlign="center">
        Today
      </Typography>
      <Stack spacing={2}>
        {list.map((item, index) => (
          <Paper key={index} onClick={()=>console.log('432')}>{item}</Paper>
        ))}
      </Stack>
      <Box sx={{ position: "fixed", bottom: "0px" }}>
        <TextField
          id="standard-basic"
          label="Add"
          variant="standard"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button
          variant="outlined"
          onClick={addNewValue}
          disabled={inputValue.length == 0}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default Today;
