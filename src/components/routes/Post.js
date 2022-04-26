import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import React from "react";
import CommentCreate from "./CommentCreate";
import PostEdit from "./PostEdit";
import PostDelete from "./PostDelete";
import CommentEdit from "./CommentEdit";
import CommentDelete from "./CommentDelete";
import like from "../img/icon/heart.png";
import editIcon from "../img/icon/pencil.png";
import more from "../img/icon/down.png";
export default function Post() {
  //get posts for render.
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);
  //toggle the comment page
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  //for comment
  const [editCom, setEditCom] = useState(false);
  //to get comID and set the change, to separate the button.
  const [comID, setComID] = useState(0);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUser(response.data);
    } catch (error) {}
  };
  const { id } = useParams();
  //   console.log(id);
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
    fetchComment();
  }, []);

  const fetchComment = async () => {
    try {
      const response = await axios(`${apiUrl}/comments`);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log("comment", comments);

  // Get info only targeted post by id
  // toggle the content to see comment
  const renderCommment = () => {
    return comments.map((com, index) => {
      const {
        Comment_id,
        FK_Commenter_id,
        FK_Post_id,
        Comment,
        Comment_Created_at,
      } = com;

      return (
        <div>
          {id == FK_Post_id ? (
            <div className="comment">
              {isOpen && (
                <div
                  className={
                    isOpen ? "comment-content show" : "comment-content"
                  }
                >
                  <img
                    src={editIcon}
                    className="edit-icon-comment"
                    onClick={() => {
                      setEditCom(!editCom);
                      setComID(Comment_id);
                    }}
                  ></img>

                  <CommentDelete
                    Comment_id={Comment_id}
                    setComments={setComments}
                    FK_Post_id={FK_Post_id}
                  />
                  {editCom == true && comID == Comment_id ? (
                    <>
                      <CommentEdit
                        Comment_id={Comment_id}
                        FK_Commenter_id={FK_Commenter_id}
                        FK_Post_id={FK_Post_id}
                        Comment={Comment}
                        Comment_Created_at={Comment_Created_at}
                        setComments={setComments}
                      />
                    </>
                  ) : (
                    <div>
                      <p></p>
                      <p>{Comment_Created_at}</p>
                      <p>
                        {FK_Commenter_id} : {Comment}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    });
  };

  const render = () => {
    return posts.map((post, index) => {
      const {
        FK_User_id,
        Post_Created_at,
        Post_title,
        Post_content,
        Post_img,
        likes,
        Post_id,
      } = post;
      return (
        <div>
          {id == Post_id ? (
            <div className="post">
              <div className="Cardtop">
                <p>{Post_Created_at}</p>
                <p className="likes-sec">
                  <img className="like" src={like}></img>
                  {likes == null ? 0 : likes}
                </p>
                <img
                  src={editIcon}
                  className="edit-icon"
                  onClick={() => setEdit(!edit)}
                ></img>
                <PostDelete Post_id={Post_id} setPosts={setPosts} />
              </div>
              {edit ? (
                <>
                  <PostEdit
                    FK_User_id={FK_User_id}
                    Post_Created_at={Post_Created_at}
                    Post_title={Post_title}
                    Post_content={Post_content}
                    Post_img={Post_img}
                    likes={likes}
                    Post_id={Post_id}
                    setPosts={setPosts}
                  />
                </>
              ) : (
                <div className="postContent">
                  <h2>{Post_title}</h2>
                  <p>{Post_content}</p>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    });
  };
  //   console.log("post data is comming?", data);
  return (
    <>
      <section className="post-container">
        <div className="post-post">
          <div>{render()}</div>
          <CommentCreate
            comments={comments}
            setComments={setComments}
            id={id}
          />
          <div className="openComment" onClick={() => setIsOpen(!isOpen)}>
            <img className="more-icon" src={more}></img>
          </div>
          <div>{renderCommment()}</div>
        </div>
      </section>
    </>
  );
}
