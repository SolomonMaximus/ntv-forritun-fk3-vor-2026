import { useQuery } from "@tanstack/react-query";

const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json();
}

export function PostsReactQuery() {
  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    retry: false,
  });

  if (isError) {
    return (
      <div style={{ backgroundColor: "red", color: "white", padding: "1rem" }}>
        <p>Error: {error.message}</p>
        <button onClick={refetch}>Try again</button>
      </div>
    );
  }

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map((post) => ( 
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
 
  const posts: Post[] = [];
  return (
    <div>
      <p>
        TODO — fetch {API_URL} with useQuery. (currently {posts.length} posts
        loaded)
      </p>
    </div>
  );
}
