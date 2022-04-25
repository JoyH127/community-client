import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import Posts from "./components/routes/Posts";
import Post from "./components/routes/Post";
import Login from "./components/shared/Login";
import { useState } from "react";
import Register from "./components/shared/Register";

function App() {
  // const [postsData, setPosts] = useState([]);
  // const get = (postsData) => {
  //   setPosts(postsData);
  // };
  // console.log("getting data", postsData);
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to={"/posts"}>Thread</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
