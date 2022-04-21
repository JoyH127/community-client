import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import Posts from "./components/routes/Posts";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
