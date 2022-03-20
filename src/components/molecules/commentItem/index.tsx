import React, { MouseEventHandler } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import DeleteButton from "../../atoms/deleteButton";

interface ICommentItem {
    commentId: string;
    commentText: string;
    handleDeleteComment: MouseEventHandler<HTMLButtonElement>;
}

const CommentItem: React.FC<ICommentItem> = ({handleDeleteComment, commentText, commentId}) => {
  return (
    <Box key={commentId}>
      <Typography variant="body1" gutterBottom>
        {commentText}
        <DeleteButton handleDelete={handleDeleteComment} />
      </Typography>
    </Box>
  );
};

export default CommentItem;
