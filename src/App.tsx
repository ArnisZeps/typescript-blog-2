import React, { useState } from "react";
import "./App.css";
import "./components/atoms/addButton/index"
import AddButton from "./components/atoms/addButton/index";
import DeleteButton from "./components/atoms/deleteButton/index";

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
  const handleDeleteBlogPost = (id: string) => {
    const newBlogPosts = blogPosts.filter((blog) => blog.id !== id);
    setBlogPosts(newBlogPosts);
  };
  const handleDeleteComment = (commentId: string, postId: string) => {

    const newBlogPosts = [...blogPosts]
    const currentPost = newBlogPosts.find(bp => bp.id === postId);
    if(currentPost){
      currentPost.comments = currentPost.comments.filter(c => c.id !== commentId)
      setBlogPosts(newBlogPosts);
      setCommentValue("");
    }
  };
  const handleAddComment = (postId: string) => {
    debugger
    const newComment: IComment = {
      id: new Date().toISOString(),
      text: commentValue,
    };
    const newBlogPosts = [...blogPosts]
    const currentPost = newBlogPosts.find(bp => bp.id === postId);
    if(currentPost){
      currentPost.comments.push(newComment)
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
  debugger;
  return (
    <div className="App">
      <AddButton handleAdd={handleCreateNewBlogPost}/>
      <form>
        <input
          type="text"
          value={postValue}
          onChange={(e) => setPostValue(e.target.value)}
        />
      </form>
      {blogPosts.map((bp) => (
        <div key={bp.id}>
          <button id="add-comment" onClick={() => handleAddComment(bp.id)}>
            Add comment
          </button>
          {bp.text}
          <button id="delete-post" onClick={() => handleDeleteBlogPost(bp.id)}>
            X
          </button>
          <div style={{ backgroundColor: "red" }}>
            <input
              type="text"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
            />
          </div>
          {bp.comments.map((c) => (
            <div key={c.id} style={{ backgroundColor: "green" }}>
              {c.text}
              <button id="remove-comment" onClick={(e) => handleDeleteComment(c.id, bp.id)}>X</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
