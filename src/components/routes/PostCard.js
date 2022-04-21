function PostCard({
  Post_Created_at,
  Post_title,
  Post_content,
  Post_img,
  likes,
}) {
  return (
    <>
      <div className="post">
        <div>{Post_Created_at}</div>
        <p>{likes}</p>
        <h2>{Post_title}</h2>
        <p>{Post_content}</p>
      </div>
    </>
  );
}

export default PostCard;
