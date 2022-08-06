import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { addCategory } from "../redux/listCategories";

export default function NewListDialog({ open, setOpen }) {
  const dispatch = useDispatch()
  const [newListName, setNewListName] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleOnChangeListName = (event) => setNewListName(event.target.value)

  const handleAdd = () => {
    dispatch(addCategory({name: newListName}))
    setNewListName('')
    handleClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new list</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What's the name of the new list?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New List"
            type="string"
            fullWidth
            variant="standard"
            value={newListName}
            onChange={handleOnChangeListName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
