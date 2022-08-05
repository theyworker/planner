import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleItemAsDone } from "../redux/today";

const Today = () => {
  const [inputValue, setInputValue] = useState("");
  const list = useSelector((state) => state.today.data || []);

  const dispatch = useDispatch();

  const addNewValue = () => {
    if (inputValue && inputValue.length > 0) {
      let newVal = inputValue;
      setInputValue("");
      dispatch(addItem(newVal));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addNewValue();
    }
  };
  const handleItemClick = (uuid) => {
    dispatch(toggleItemAsDone(uuid))
  }

  return (
    <Box sx={{paddingTop: '2em'}}>
      {" "}
      <Typography variant="h2" component="div" gutterBottom textAlign="center" sx={{color: '#FFF', }} fontFamily={"'Josefin Sans', sans-serif"}>
        Today
      </Typography>
      <Stack spacing={2}>
        {list
          .filter((item) => item.active)
          .map((item, index) => (
            <Paper
              key={index}
              onClick={() => handleItemClick(item.uuid)}
              sx={{ color: item.done ? "red" : "black " , textDecoration:  item.done ? 'line-through' : '', background: '#000', color: '#FFF', fontSize : '1em'}}
              elevation={0}

            >
              {item.text}
            </Paper>
          ))}
      </Stack>
      <Box sx={{ position: "fixed", bottom: "0px",width: '100%'}}>
        <Box SX={{width: '80%'}}>
        <TextField
          id="standard-basic"
        
          variant="standard"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          fullWidth
          sx={{ input: { color: '#FFF' } }}

          autoFocus
        />
        </Box>
      
      </Box>
    </Box>
  );
};

export default Today;
