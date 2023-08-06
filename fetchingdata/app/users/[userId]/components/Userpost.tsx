type props = {
  posts: Promise<posts[]>;
};

export default async function UserPost({ posts }: props) {
  const data = await posts;

  return (
    <section>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.body}</p>
          </div>
        );
      })}
    </section>
  );
}
