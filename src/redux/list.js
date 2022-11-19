import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { postReq, putReq } from "../api/api";
import { LIST } from "../api/const";

const createList = (newListName) => ({
  listId: uuidv4(),
  user: "Deshan",
  name: newListName,
  items: [],
  active: true
});
const createNewListItem = (listItemName) => ({
  text: listItemName,
  active: true,
  itemId: uuidv4(),
  sortOrder: 0
});
const updateListArray = (listData = [], listId, newItem) => {
  let tempState = listData;
  let index = tempState.findIndex((list) => list.listId == listId);
  tempState[index].items = [...tempState[index].items, newItem];
  return { tempState, items: tempState[index].items };
};

const toggleListItem = (listData = [], listId, itemId) => {
  let tempState = listData;
  let index = tempState.findIndex((list) => list.listId == listId);
  let itemIndex = tempState[index].items.findIndex(
    (item) => item.itemId == itemId
  );
  tempState[index].items[itemIndex].active =
    !tempState[index].items[itemIndex].active;
  return { tempState, items: tempState[index].items };
};

export const listSlice = createSlice({
  name: "list",
  initialState: {
    listData: [],
  },
  reducers: {
    addAllLists: (state, action) => {
      state.listData = action.payload;
    },
    addList: (state, action) => {
      let newListObject = createList(action.payload);
      postReq(LIST, newListObject);
      state.listData = [...state.listData, newListObject];
    },
    updateList: (state, action) => {
      let listItemObject = createNewListItem(action.payload.newItem);
      let { tempState, items } = updateListArray(
        state.listData,
        action.payload.listId,
        listItemObject
      );
      putReq(LIST, {
        listId: action.payload.listId,
        active: true,
        user: "Devil",
        items: items,
      });
      state.listData = [...tempState];
    },
    toogleItem: (state, action) => {
      let { tempState, items } = toggleListItem(
        state.listData,
        action.payload.listId,
        action.payload.itemId
      );
      putReq(LIST, {
        listId: action.payload.listId,
        active: true,
        user: "Devil",
        items: items,
      });
      state.listData = [...tempState];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAllLists, addList, updateList , toogleItem} = listSlice.actions;

export default listSlice.reducer;
