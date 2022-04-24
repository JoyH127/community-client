import axios from "axios";
import apiUrl from "../../apiConfig";
import { useNavigate } from "react-router-dom";
export default function PostDelete(props) {
  // 2.
  const navigate = useNavigate();
  const deletePost = () => {
    axios.delete(`${apiUrl}/posts/${props.Post_id}`).then((res) => {
      // 3. get deleted response data into set post.
      props.setPosts(res.data);
      window.location.reload();
    });
  };

  // 4.
  return (
    <button
      className="del-btn"
      onClick={() => {
        deletePost();
        navigate("/posts");
      }}
    >
      Delete
    </button>
  );
}

//after delete the post, go back to previous page.
