import axios from "axios";
import apiUrl from "../../apiConfig";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../img/icon/trash.png";
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
    <div className="comment-delete">
      <img
        src={deleteIcon}
        className="del-icon-comment"
        onClick={() => {
          deleteComment();
          navigate(`/posts/${props.FK_Post_id}`);
        }}
      ></img>
    </div>
  );
}

//after delete the post, go back to previous page.
