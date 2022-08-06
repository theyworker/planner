import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ inputValue, handleInput, handleKeyDown }) => (
  <TextField
    id="standard-basic"
    variant="standard"
    value={inputValue}
    onChange={handleInput}
    onKeyDown={handleKeyDown}
    fullWidth
    sx={{
      input: {
        color: "#FFF",
        fontFamily: "'Josefin Sans', sans-serif",
        fontSize: "1em",
      },
    }}
    autoFocus
  />
);
export default TextInput;
