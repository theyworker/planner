import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateList } from "../redux/list";
import Item from "../subcomponents/Item";
import TextInput from "../subcomponents/TextInput";
import Title from "../subcomponents/Title";

const List = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const { list } = useParams();
  const { listData } = useSelector((state) => state.list || []);

  let [listObject] = listData && listData.filter((listItem) => listItem.name == list) || {};
  useEffect(() => {
    console.log(listObject);
  }, []);

  const addNewValue = () => {
    if (inputValue && inputValue.length > 0) {
      let newVal = inputValue;
      setInputValue("");
      dispatch(updateList({listId : listObject.listId , newItem : newVal}));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addNewValue();
    }
  };
  const handleItemClick = (uuid) => {
    // dispatch(toggleItemAsDone(uuid));
  };

  const handleInput = (event) => setInputValue(event.target.value);

  return (
    <Box sx={{ paddingTop: "2em" }}>
      <Title text={list} />{" "}
      <Stack spacing={2}>
        {listObject.items
          .filter((item) => item.active)
          .map((item, index) => (
            <Item
            key={`${item.name}${index}`}
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

export default List;
