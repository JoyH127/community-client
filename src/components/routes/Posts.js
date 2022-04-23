import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import PostCard from "./PostCard";
import PostCreate from "./PostCreate";
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

  console.log("posts", posts);

  // get(posts);
  const postsData = posts.map((post, index) => {
    const {
      FK_User_id,
      Post_id,
      Post_Created_at,
      Post_title,
      Post_content,
      Post_img,
      likes,
    } = post;
    return (
      <div>
        <PostCard
          FK_User_id={FK_User_id}
          Post_id={Post_id}
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
  return (
    <div>
      <section className="createPost">
        <PostCreate posts={posts} setPosts={setPosts} />
      </section>

      <section className="postContainer">
        <div className="posts">{postsData}</div>
      </section>
    </div>
  );
}

export default Posts;
