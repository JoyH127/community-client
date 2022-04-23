import { useForm } from "react-hook-form";
import axios from "axios";
import apiUrl from "../../apiConfig";

export default function PostEdit(props) {
  const { register, handleSubmit } = useForm();

  //should fix this part

  const Submit = (data) => {
    console.log(data); // {Post_content...,}
    updatePost(data);
  };
  const updatePost = (data) => {
    axios.put(`${apiUrl}/posts`, data).then((res) => {
      props.setPosts(
        props.posts.map((post) => {
          return post.id === props.id
            ? {
                Post_id: 104,
                FK_User_id: 100,
                Post_title: post.Post_title,
                Post_content: post.Post_content,
              }
            : post;
        })
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(Submit)}>
      <div className="input-top">
        <span className="input-user">
          <input
            placeholder="user"
            defaultValue={props.FK_User_id}
            {...register("FK_User_id")}
          />
        </span>
      </div>
      <div className="input-content">
        <span className="input-title">
          <input
            placeholder="title"
            defaultValue={props.Post_title}
            name="title"
            {...register("Post_title")}
          />
        </span>
        <input
          placeholder="Content.."
          name="content"
          defaultValue={props.Post_content}
          {...register("Post_content")}
        />
        <button type="submit">Post</button>
      </div>
    </form>
  );
}
