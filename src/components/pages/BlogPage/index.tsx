import Reactfrom, { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import Form from "../../organisms/form/index";
import BlogForm from "../../organisms/blogForm/index"
import AddButton from "../../atoms/addButton/index";
import DeleteButton from "../../atoms/deleteButton/index";
import BlogItem from "../../molecules/blogItem/index";

interface IComment {
  id: string;
  text: string;
}

interface IBlogPost {
  id: string;
  text: string;
  comments: IComment[];
}

interface IBlogPage {
  handleCreateNewBlogPost: () => void;
  handleAddComment: (postId: string) => void;
  setPostValue: (newValue: string) => void;
  setCommentValue: (newValue: string) => void;
  handleDeleteBlogPost: (postId: string) => void;
  handleDeleteComment: (postId: string, commentId: string) => void;
  postValue: string;
  commentValue: string;
  blogPosts: IBlogPost[];
}

const BlogPage: React.FC<IBlogPage> = ({
  handleAddComment,
  handleCreateNewBlogPost,
  handleDeleteBlogPost,
  handleDeleteComment,
  setCommentValue,
  setPostValue,
  postValue,
  commentValue,
  blogPosts,
}) => {
  return (
    <Box>
      {blogPosts.map((bp) => (
        <BlogForm 
          text={bp.text}
          id={bp.id}
          comments={bp.comments}
          commentValue={commentValue}
          handleDeleteBlogPost={handleDeleteBlogPost}
          handleAddComment={handleAddComment}
          handleDeleteComment={handleDeleteComment}
          setCommentValue={setCommentValue}
        />
      ))}
      <Form
        handleAdd={handleCreateNewBlogPost}
        formFieldValue={postValue}
        onChange={setPostValue}
      />
    </Box>
  );
};

export default BlogPage;
