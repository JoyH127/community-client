import { useForm } from "react-hook-form";
import axios from "axios";
import apiUrl from "../../apiConfig";
export default function PostCreate(props) {
  const { register, handleSubmit } = useForm();
  const Submit = (data) => {
    console.log(data);
    addPost(data);
  };

  // 2.
  const addPost = (data) => {
    axios.post(`${apiUrl}/posts`, data).then(() => {
      props.setPosts([...props.posts, { data }]);
      window.location.reload();
    });
  };

  return (
    <section className="post-post-input">
      <form onSubmit={handleSubmit(Submit)}>
        <div className="input-top">
          <span className="input-user">
            <input
              placeholder="user"
              defaultValue={100}
              {...register("FK_User_id")}
            />
          </span>
        </div>
        <div className="input-content">
          <span className="input-title">
            <input
              placeholder="title"
              name="title"
              {...register("Post_title")}
            />
          </span>
          <input
            placeholder="Content.."
            name="content"
            {...register("Post_content")}
          />
          <button type="submit">Post</button>
        </div>
      </form>
    </section>
  );
}
