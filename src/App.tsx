import React, { useState } from "react";
import "./App.css";
import BlogPage from "./components/pages/BlogPage/index"
import {IComment} from "./components/interfaces/index"
import {IBlogPost} from "./components/interfaces/index"

function App() {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([]);
  const [postValue, setPostValue] = useState("");

  const handleAddComment = (postId: string, commentValue: string) => {
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
    }
  };

  return (
    <div className="App">
      <BlogPage 
          handleAddComment={handleAddComment}
          handleCreateNewBlogPost={handleCreateNewBlogPost}
          handleDeleteBlogPost={handleDeleteBlogPost}
          handleDeleteComment={handleDeleteComment}
          setPostValue={setPostValue}
          postValue={postValue}
          blogPosts={blogPosts}
      />
    </div>
  );
}

export default App;
