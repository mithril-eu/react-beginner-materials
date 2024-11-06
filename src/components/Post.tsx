import { Link } from "react-router-dom";
import { Post as TPost } from "../types";
import { useContext } from "react";
import { ThemeContext } from "../providers/context";

type Props = {
  post: TPost;
};

export function Post({ post }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={`/posts/${post.id}`}>
      <h2>Tema je {theme}</h2>
      <article key={post.id}>{post.title}</article>
    </Link>
  );
}
