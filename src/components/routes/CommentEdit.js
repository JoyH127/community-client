import axios from "axios";
import apiUrl from "../../apiConfig";
import { useForm } from "react-hook-form";
export default function CommentEdit(props) {
  const { register, handleSubmit } = useForm();

  // getting data from form.
  const Submit = (data) => {
    //need to switch FK_User_id value into, so reshape input data for database.
    const CommentData = {
      Comment_id: props.Comment_id,
      FK_Commenter_id: props.FK_Commenter_id,
      Comment: data.Comment,
    };

    console.log(CommentData);
    UpdateComment(CommentData);
  };

  const UpdateComment = (CommentData) => {
    axios
      .put(`${apiUrl}/comments/${props.Comment_id}`, CommentData)
      .then(() => {
        props.setComments([props, { CommentData }]);
        // window.location.reload();
      });
  };

  return (
    <form onSubmit={handleSubmit(Submit)}>
      <div className="input-content">
        <span className="input-comment">
          <input
            placeholder="comment"
            defaultValue={props.Comment}
            name="title"
            {...register("Comment")}
          />
        </span>
        <button className="post-edit-btn" type="submit">
          Post
        </button>
      </div>
    </form>
  );
}
