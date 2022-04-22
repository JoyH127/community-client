import { useNavigate } from "react-router-dom";
function PostCard({
  Post_Created_at,
  Post_title,
  Post_content,
  Post_img,
  likes,
  Post_id,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="post" onClick={() => navigate(`/${Post_id}`)}>
        <div className="Cardtop">
          <p>{Post_Created_at}</p>
          <p>{likes == null ? 0 : likes}</p>
        </div>
        <div className="postContent">
          <h2>{Post_title}</h2>
          <p>{Post_content}</p>
        </div>
      </div>
    </>
  );
}

export default PostCard;
