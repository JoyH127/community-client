import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";
import PostCard from "./PostCard";

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(`${apiUrl}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(posts);

  const postsData = posts.map((post, index) => {
    const { Post_Created_at, Post_title, Post_content, Post_img, likes } = post;
    return (
      <div>
        <PostCard
          Post_Created_at={Post_Created_at}
          Post_title={Post_title}
          Post_content={Post_content}
          Post_img={Post_img}
          likes={likes}
          key={index}
        />
      </div>
    );
  });
  return <div className="posts">{postsData}</div>;
}

export default Posts;
