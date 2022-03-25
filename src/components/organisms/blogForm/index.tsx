import React, { useState } from "react";
import Box from "@mui/material/Box";
import BlogItem from "../../molecules/blogItem/index";
import Form from "../../organisms/form/index";
import CommentItem from "../../molecules/commentItem/index";
import Typography from '@mui/material/Typography';
import { IComment } from "../../interfaces/index";
import { Divider } from "@mui/material";

interface IBlogForm {
  postText: string;
  postId: string;
  comments: IComment[];
  handleAddComment: (postId: string, text: string) => void;
  handleDeleteBlogPost: (postId: string) => void;
  handleDeleteComment: (postId: string, commentId: string) => void;
}

const BlogForm: React.FC<IBlogForm> = ({
  postText,
  postId,
  comments,
  handleAddComment,
  handleDeleteBlogPost,
  handleDeleteComment,
}) => {
  const [commentValue, setCommentValue] = useState("");

  const createComment = () => {
    handleAddComment(postId, commentValue);
    setCommentValue("");
  };

  return (
    <Box className="Blog-Form" key={postId}>
      <Divider className="Post-Divider" />
      <BlogItem
        postText={postText}
        handleDelete={() => handleDeleteBlogPost(postId)}
        key={postId}
      />
      <Typography variant="caption" display="block" gutterBottom>
        Comment Section
      </Typography>      
      <Divider />
      <Form
        handleAdd={() => createComment()}
        formFieldValue={commentValue}
        onChange={setCommentValue}
      />
      {comments.map((c) => (
        <CommentItem
          key={c.commentId}
          commentText={c.text}
          commentId={c.commentId}
          handleDeleteComment={() => handleDeleteComment(c.commentId, postId)}
        />
      ))}
      <Divider className="Post-Divider" />
    </Box>
  );
};

export default BlogForm;
