import { useForm } from "react-hook-form";
import axios from "axios";
import apiUrl from "../../apiConfig";
export default function PostEdit(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data); // {Post_content...,}
    data["id"] = props.id; //add the id from props
    updatePost(data);
  };
  const updatePost = (data) => {
    axios.put(`${apiUrl}/posts`, data).then(() => {
      props.setPosts(
          props.posts.map(())
      )
    });
  };
}
