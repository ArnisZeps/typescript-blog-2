import React, { useState } from "react";
import Box from "@mui/material/Box";
import BlogItem from "../../molecules/blogItem/index";
import Form from "../../organisms/form/index";
import CommentItem from "../../molecules/commentItem/index";
import { IComment } from "../../interfaces/index";

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
    <Box key={postId}>
      <BlogItem postText={postText} handleDelete={() => handleDeleteBlogPost(postId)} key={postId} />
      <Form
        handleAdd={() => createComment()}
        formFieldValue={commentValue}
        onChange={setCommentValue}
      />
      {comments.map((c) => (
        <CommentItem
          commentText={c.text}
          commentId={c.id}
          handleDeleteComment={() => handleDeleteComment(c.id, postId)}
        />
      ))}
    </Box>
  );
};

export default BlogForm;
