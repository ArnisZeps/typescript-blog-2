import Reactfrom, { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import Form from "../../organisms/form/index";
import BlogForm from "../../organisms/blogForm/index"
import {IBlogPost} from "../../interfaces/index"


interface IBlogPage {
  handleCreateNewBlogPost: MouseEventHandler<HTMLButtonElement>;
  handleAddComment: (postId: string, text: string) => void;
  setPostValue: (newValue: string) => void;
  handleDeleteBlogPost: (postId: string) => void;
  handleDeleteComment: (postId: string, commentId: string) => void;
  postValue: string;
  blogPosts: IBlogPost[];
}

const BlogPage: React.FC<IBlogPage> = ({
  handleAddComment,
  handleCreateNewBlogPost,
  handleDeleteBlogPost,
  handleDeleteComment,
  setPostValue,
  postValue,
  blogPosts,
}) => {
  return (
    <Box className="Blog-Page">
      {blogPosts.map((bp) => (
        <BlogForm 
          postText={bp.text}
          postId={bp.postId}
          comments={bp.comments || []}
          handleDeleteBlogPost={handleDeleteBlogPost}
          handleAddComment={handleAddComment}
          handleDeleteComment={handleDeleteComment}
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
