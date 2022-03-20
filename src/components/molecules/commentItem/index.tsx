import React, { MouseEventHandler } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import DeleteButton from "../../atoms/deleteButton";

interface ICommentItem {
    commentId: string;
    text: string;
    handleDeleteComment: MouseEventHandler<HTMLButtonElement>;
}

const CommentItem: React.FC<ICommentItem> = ({handleDeleteComment, text}) => {
  return (
    <Box>
      <Typography variant="body1" gutterBottom>
        {text}
        <DeleteButton handleDelete={handleDeleteComment} />
      </Typography>
    </Box>
  );
};

export default CommentItem;
