import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";
import PostCard from "./PostCard";
import PostForm from "../shared/PostForm";
function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [createdPost, setCreatedPost] = useState(null);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    // if the entry is created in the database, save the response data
    // in the state.
    axios({
      url: `${apiUrl}/posts`,
      method: "POST",
      data: post,
    }).then((res) => {
      setCreatedPost(res.data).catch(console.error);
      console.log("post", post);
    });
  };

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    // created a placeholder grabbing the value from the user input form
    const editedItem = Object.assign(post, updatedField);
    // assigned the empty state with the updatedField into one object
    setPost(editedItem);
    // assigned the new object to be updated to the state
  };

  useEffect(() => {
    if (createdPost) {
      return navigate(`/posts`);
    }
  }, [createdPost, navigate]);

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
  return (
    <div>
      <section className="createPost">
        <PostForm
          post={post}
          handleSubmit={(e) => handleSubmit(e)}
          handleChange={(e) => handleChange(e)}
        />
      </section>
      <div className="posts">{postsData}</div>
    </div>
  );
}

export default Posts;
