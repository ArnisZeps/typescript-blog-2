import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import BlogPage from "./components/pages/BlogPage/index";
import { IComment } from "./components/interfaces/index";
import { IBlogPost } from "./components/interfaces/index";

function App() {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([]);
  const [postValue, setPostValue] = useState("");

  // React.useEffect(() => {
  //   const get_posts = async () => {
  //     const URL =
  //       "https://9l3i9vm5oh.execute-api.eu-central-1.amazonaws.com/test/post";
  //     try {
  //       const response = await axios.get(URL);
  //       //  debugger;
  //       //  setBlogPosts(response.data)
  //       console.log(JSON.stringify(response.data));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   get_posts();
  // }, [blogPosts]);

  const getComments = async (postId: string) => {
    const URL =
    "https://9l3i9vm5oh.execute-api.eu-central-1.amazonaws.com/test/comment";
    const params = {
      postId,
    }
    try {
      const response = await axios.get(URL, {params});
      //  debugger;
      //  setBlogPosts(response.data)
      console.log(JSON.stringify(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddComment = async (postId: string, commentValue: string) => {
    const URL =
      "https://9l3i9vm5oh.execute-api.eu-central-1.amazonaws.com/test/comment";

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
    const data = {
      commentId: newComment.id,
      postId: postId,
      text: newComment.text,
    };
    try {
      const response = await axios.post(URL, data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }

    getComments(postId);
  };

  const handleCreateNewBlogPost = async () => {
    const URL =
      "https://9l3i9vm5oh.execute-api.eu-central-1.amazonaws.com/test/post";

    const newBlogPost: IBlogPost = {
      id: new Date().toISOString(),
      text: postValue,
      comments: [],
    };
    setBlogPosts((oldPosts) => [...oldPosts, newBlogPost]);
    setPostValue("");
    const data = {
      postId: newBlogPost.id,
      text: newBlogPost.text,
    };
    try {
      const response = await axios.post(URL, data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteBlogPost = async (id: string) => {
    const URL =
      "https://9l3i9vm5oh.execute-api.eu-central-1.amazonaws.com/test/post";
    const newBlogPosts = blogPosts.filter((blog) => blog.id !== id);
    setBlogPosts(newBlogPosts);
    const config = {
      data: {
        postId: id,
      },
    };
    try {
      const response = await axios.delete(URL, config);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteComment = async (commentId: string, postId: string) => {
    const URL =
      "https://9l3i9vm5oh.execute-api.eu-central-1.amazonaws.com/test/comment";
    const newBlogPosts = [...blogPosts];
    const currentPost = newBlogPosts.find((bp) => bp.id === postId);
    if (currentPost) {
      currentPost.comments = currentPost.comments.filter(
        (c) => c.id !== commentId
      );
      setBlogPosts(newBlogPosts);
      const config = {
        data: {
          postId: postId,
          commentId: commentId,
        },
      };
      try {
        const response = await axios.delete(URL, config);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
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
