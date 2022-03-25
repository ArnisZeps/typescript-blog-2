import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import BlogPage from "./components/pages/BlogPage/index";
import { IComment } from "./components/interfaces/index";
import { IBlogPost } from "./components/interfaces/index";

function App() {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([]);
  const [postValue, setPostValue] = useState("");

  React.useEffect(() => {
     const get_posts = async () => {
        const URL =
        "https://4s96rnk0pb.execute-api.eu-central-1.amazonaws.com/test/post";
        try {
          const response = await axios.get(URL);
          debugger;
          setBlogPosts(response.data)
          console.log(JSON.stringify(response.data));
        } catch (err) {
          console.log(err);
        }
     }
     get_posts();
  }, [blogPosts])

  const handleAddComment = async (postId: string, text: string) => {
    const URL =
      "https://4s96rnk0pb.execute-api.eu-central-1.amazonaws.com/test/comment";

    const newComment: IComment = {
      postId,
      commentId: new Date().toISOString(),
      text,
    };
    try {
      const response = await axios.post(URL, newComment);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateNewBlogPost = async () => {
    const URL =
      "https://4s96rnk0pb.execute-api.eu-central-1.amazonaws.com/test/post";

    const newBlogPost: IBlogPost = {
      postId: new Date().toISOString(),
      text: postValue,
    };
    try {
      const response = await axios.post(URL, newBlogPost);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteBlogPost = async (id: string) => {
    const URL =
      "https://4s96rnk0pb.execute-api.eu-central-1.amazonaws.com/test/post";

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
      "https://4s96rnk0pb.execute-api.eu-central-1.amazonaws.com/test/comment";
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
