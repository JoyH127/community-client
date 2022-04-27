import axios from "axios";
import apiUrl from "../../apiConfig";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../img/icon/trash.png";
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
    <img
      src={deleteIcon}
      className="del-icon"
      onClick={() => {
        deletePost();
        navigate("/posts");
      }}
    ></img>
  );
}

//after delete the post, go back to previous page.
