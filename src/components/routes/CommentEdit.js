import axios from "axios";
import apiUrl from "../../apiConfig";
import { useForm } from "react-hook-form";
export default function CommentEdit(props) {
  const { register, handleSubmit } = useForm();
  const Submit = (data) => {
    //need to switch FK_User_id value into into
    const CommentData = {
      Comment_id: props.Comment_id,
      FK_Commenter_id: props.FK_Commenter_id,
      Comment: data.Comment,
    };

    console.log(CommentData);
    UpdateComment(CommentData);
  };

  // 2.
  const UpdateComment = (CommentData) => {
    axios
      .put(`${apiUrl}/comments/${props.Comment_id}`, CommentData)
      .then(() => {
        props.setComments([props, { CommentData }]);
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
        <button type="submit">Post</button>
      </div>
    </form>
  );
}
