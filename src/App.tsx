import React, { useState } from "react";
import "./App.css";
import Form from "./components/organisms/form/index";
import AddButton from "./components/atoms/addButton/index";
import DeleteButton from "./components/atoms/deleteButton/index";
import BlogPage from "./components/pages/BlogPage/index"

interface IBlogPost {
  id: string;
  text: string;
  comments: IComment[];
}

interface IComment {
  id: string;
  text: string;
}

function App() {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([]);
  const [postValue, setPostValue] = useState("");
  const [commentValue, setCommentValue] = useState("");

  const handleAddComment = (postId: string) => {
    debugger;
    const newComment: IComment = {
      id: new Date().toISOString(),
      text: commentValue,
    };
    const newBlogPosts = [...blogPosts];
    const currentPost = newBlogPosts.find((bp) => bp.id === postId);
    if (currentPost) {
      currentPost.comments.push(newComment);
      setBlogPosts(newBlogPosts);
      setCommentValue("");
    }
  };
  const handleCreateNewBlogPost = () => {
    const newBlogPost: IBlogPost = {
      id: new Date().toISOString(),
      text: postValue,
      comments: [],
    };
    setBlogPosts((oldPosts) => [...oldPosts, newBlogPost]);
    setPostValue("");
  };

  const handleDeleteBlogPost = (id: string) => {
    const newBlogPosts = blogPosts.filter((blog) => blog.id !== id);
    setBlogPosts(newBlogPosts);
  };
  const handleDeleteComment = (commentId: string, postId: string) => {
    const newBlogPosts = [...blogPosts];
    const currentPost = newBlogPosts.find((bp) => bp.id === postId);
    if (currentPost) {
      currentPost.comments = currentPost.comments.filter(
        (c) => c.id !== commentId
      );
      setBlogPosts(newBlogPosts);
      setCommentValue("");
    }
  };

  return (
    <div className="App">
      <BlogPage 
          handleAddComment={handleAddComment}
          handleCreateNewBlogPost={handleCreateNewBlogPost}
          handleDeleteBlogPost={handleDeleteBlogPost}
          handleDeleteComment={handleDeleteComment}
          setCommentValue={setCommentValue}
          setPostValue={setPostValue}
          postValue={postValue}
          commentValue={commentValue}
          blogPosts={blogPosts}
      />
      {/* <Form
        handleAdd={() => handleCreateNewBlogPost()}
        formFieldValue={postValue}
        onChange={setPostValue}
      />
      {blogPosts.map((bp) => (
        <div key={bp.id}>
          <DeleteButton handleDelete={() => handleDeleteBlogPost(bp.id)} />
          {bp.text}
          <Form
            handleAdd={() => handleAddComment(bp.id)}
            formFieldValue={commentValue}
            onChange={setCommentValue}
          />
          {bp.comments.map((c) => (
            <div key={c.id} style={{ backgroundColor: "green" }}>
              {c.text}
              <DeleteButton handleDelete={() => handleDeleteComment(c.id, bp.id)} />
            </div>
          ))}
        </div>
      ))} */}
    </div>
  );
}

export default App;
