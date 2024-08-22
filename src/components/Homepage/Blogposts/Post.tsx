import { BlogPost } from "@/lib/types";

interface Props {
  blogPost: BlogPost;
}

const Post = ({ blogPost }: Props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl cursor-pointer">
      <figure>
        <img src={blogPost.image} alt={blogPost.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{blogPost.title}</h2>
        <p>{blogPost.flavorText}</p>
      </div>
    </div>
  );
};

export default Post;
