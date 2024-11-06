import { useEffect, useState } from "react";
import { getPosts } from "../services/posts.service";
import { Post as TPost } from "../types";
import "./Posts.css";
import { Post } from "./Post";

export function Posts() {
  const [posts, setPosts] = useState<TPost[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPosts()
      .then((posts) => setPosts(posts))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h3>Lista Postova</h3>
      {isLoading && "LOADING......."}
      {!isLoading && (
        <div className="posts-list">
          {!isLoading &&
            posts?.map((post) => <Post key={post.id} post={post} />)}
        </div>
      )}
    </>
  );
}
