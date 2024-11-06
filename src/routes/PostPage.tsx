import { useParams } from "react-router-dom";

export function PostPage() {
  const { id } = useParams();

  // GET request na detalje post

  return <h1>Post {id}</h1>;
}
