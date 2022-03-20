import React from "react";
import Box from "@mui/material/Box";
import BlogItem from "../../molecules/blogItem/index";
import Form from "../../organisms/form/index";
import DeleteButton from "../../atoms/deleteButton/index";
import CommentItem from "../../molecules/commentItem/index";

interface IComment {
  id: string;
  text: string;
}

interface IBlogForm {
  text: string;
  id: string;
  comments: IComment[];
  commentValue: string;
  handleAddComment: (postId: string) => void;
  setCommentValue: (newValue: string) => void;
  handleDeleteBlogPost: (postId: string) => void;
  handleDeleteComment: (postId: string, commentId: string) => void;
}

const BlogForm: React.FC<IBlogForm> = ({
  text,
  id,
  comments,
  commentValue,
  handleAddComment,
  handleDeleteBlogPost,
  handleDeleteComment,
  setCommentValue,
}) => {
  return (
    <Box>
      <BlogItem text={text} handleDelete={() => handleDeleteBlogPost(id)} />
      <Form
        handleAdd={() => handleAddComment(id)}
        formFieldValue={commentValue}
        onChange={setCommentValue}
      />
      {comments.map((c) => (
          <CommentItem 
            text={c.text}
            commentId={c.id}
            handleDeleteComment={() => handleDeleteComment(c.id, id)}
          />
      ))}
    </Box>
  );
};

export default BlogForm;
