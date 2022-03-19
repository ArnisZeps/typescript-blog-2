import React, { MouseEventHandler } from 'react'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

interface IAddButton {
    handleAdd: MouseEventHandler<HTMLButtonElement>;
}

const AddButton: React.FC <IAddButton> = ({handleAdd}) => {
  return (
    <IconButton onClick={handleAdd}>
        <AddIcon/>
    </IconButton>
  )
}

export default AddButton