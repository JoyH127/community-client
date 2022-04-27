import { useForm } from "react-hook-form";
import axios from "axios";
import apiUrl from "../../apiConfig";
export default function CommentCreate({ comments, setComments, id }) {
  const { register, handleSubmit } = useForm();
  const Submit = (data) => {
    console.log(data);
    addPost(data);
  };

  // 2.
  const addPost = (data) => {
    axios.post(`${apiUrl}/comments`, data).then(() => {
      setComments([...comments, { data }]);
      // window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit(Submit)}>
      <div className="input-top">
        <span className="input-user">
          <input
            placeholder="user"
            defaultValue={100}
            {...register("FK_Commenter_id")}
          />
        </span>
        <span className="input-post">
          <input
            placeholder="Post"
            defaultValue={id}
            {...register("FK_Post_id")}
          />
        </span>
      </div>
      <div className="input-content">
        <input
          placeholder="Content.."
          name="content"
          {...register("Comment")}
        />
        <button className="comment-btn" type="submit">
          Post
        </button>
      </div>
    </form>
  );
}
