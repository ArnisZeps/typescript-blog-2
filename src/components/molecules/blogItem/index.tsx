import React, { MouseEventHandler } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import DeleteButton from "../../atoms/deleteButton";

interface IBlogItem {
    text: string;
    handleDelete: MouseEventHandler<HTMLButtonElement>;
}

const BlogItem: React.FC<IBlogItem> = ({handleDelete, text}) => {
  return (
    <Box>
      <Typography variant="body1" gutterBottom>
        {text}
        <DeleteButton handleDelete={handleDelete} />
      </Typography>
    </Box>
  );
};

export default BlogItem;
