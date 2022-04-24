import axios from "axios";
import apiUrl from "../../apiConfig";
import { useNavigate } from "react-router-dom";
export default function CommentDelete(props) {
  const navigate = useNavigate();
  const deleteComment = () => {
    axios.delete(`${apiUrl}/comments/${props.Comment_id}`).then((res) => {
      //  get deleted response data into set post.
      props.setComments(res.data);
      window.location.reload();
    });
  };

  return (
    <button
      className="del-btn"
      onClick={() => {
        deleteComment();
        navigate(`/posts/${props.FK_Post_id}`);
      }}
    >
      Delete
    </button>
  );
}

//after delete the post, go back to previous page.
