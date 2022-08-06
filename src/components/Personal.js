import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleItemAsDone } from "../redux/list";
import Item from "../subcomponents/Item";
import TextInput from "../subcomponents/TextInput";
import Title from "../subcomponents/Title";

const Today = () => {
  const [inputValue, setInputValue] = useState("");
  const list = useSelector((state) => state.list.data || []);

  const dispatch = useDispatch();

  const addNewValue = () => {
    if (inputValue && inputValue.length > 0) {
      let newVal = inputValue;
      setInputValue("");
      dispatch(addItem({text: newVal, list : 'Personal'}));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addNewValue();
    }
  };
  const handleItemClick = (uuid) => {
    dispatch(toggleItemAsDone(uuid));
  };

  const handleInput = (event) => setInputValue(event.target.value);
  return (
    <Box sx={{ paddingTop: "2em" }}>
      <Title text="Personal" />
      <Stack spacing={2}>
        {list
          .filter((item) => item.active)
          .map((item, index) => (
            <Item
              item={item}
              index={index}
              handleItemClick={handleItemClick}
            ></Item>
          ))}
      </Stack>
      <Box sx={{ position: "fixed", bottom: "0px", width: "100%" }}>
        <Box SX={{ width: "80%" }}>
          <TextInput
            inputValue={inputValue}
            handleInput={handleInput}
            handleKeyDown={handleKeyDown}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Today;
