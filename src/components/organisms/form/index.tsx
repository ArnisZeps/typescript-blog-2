import React, { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddButton from "../../atoms/addButton/index";

interface IForm {
    handleAdd: MouseEventHandler<HTMLButtonElement>;
    onChange: (newValue: string) => void;
    formFieldValue: string;
}

const Form: React.FC<IForm> = ({handleAdd, onChange, formFieldValue}) => {
  return (
    <Box>
      <TextField
        id="standard-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="standard"
        value={formFieldValue}
        onChange={(e) => onChange(e.target.value)}
      />
      <AddButton handleAdd={handleAdd} />
    </Box>
  );
};

export default Form;
