import React, { MouseEventHandler } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

interface IDeleteButton {
  handleDelete: MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton: React.FC <IDeleteButton> = ({handleDelete}) => {
  return (
    <IconButton onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
