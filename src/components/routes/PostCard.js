import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import like from "../img/icon/heart.png";
function PostCard({
  FK_User_id,
  Post_Created_at,
  Post_title,
  Post_content,
  Post_img,
  likes,
  Post_id,
}) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    try {
      const response = await axios(`${apiUrl}/users`);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  // console.log("users", users);
  //extract the username
  const getUser = users.map((user, index) => {
    const { User_name, User_id } = user;
    return <>{FK_User_id == User_id ? <p>{User_name}</p> : <></>}</>;
  });

  return (
    <>
      <div className="post" onClick={() => navigate(`${Post_id}`)}>
        <div className="Cardtop">
          <p>{Post_Created_at}</p>
          <p>
            <img className="like" src={like}></img>
            {likes == null ? 0 : likes}
          </p>
        </div>
        <div className="postContent">
          <div>{getUser}</div>
          <h2>{Post_title}</h2>
          <p>{Post_content}</p>
        </div>
      </div>
    </>
  );
}

export default PostCard;
