import { useForm } from "react-hook-form";
import axios from "axios";
import apiUrl from "../../apiConfig";

export default function PostEdit(props) {
  const { register, handleSubmit } = useForm();

  //should fix this part

  const Submit = (data) => {
    //need to switch FK_User_id value into into
    const updateData = {
      FK_User_id: parseInt(data.FK_User_id),
      Post_title: data.Post_title,
      Post_content: data.Post_content,
      Post_id: props.Post_id,
    };

    console.log(updateData);
    UpdatePost(updateData);
  };

  // 2.
  const UpdatePost = (updateData) => {
    axios.put(`${apiUrl}/posts/${props.Post_id}`, updateData).then(() => {
      props.setPosts([props, { updateData }]);
      window.location.reload();
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
