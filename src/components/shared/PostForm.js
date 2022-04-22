// it s gonna take object
const PostForm = ({ post, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="user" defaultValue={84} />
      <input
        placeholder="title"
        defaultValue={post.Post_title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="Content.."
        defaultValue={post.Post_content}
        name="content"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Post</button>
    </form>
  );
};
//defaultValue => you won't be able to type.

export default PostForm;
