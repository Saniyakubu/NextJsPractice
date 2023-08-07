export default async function getUserPost(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${userId}`
  );

  if (!res.ok) return undefined;

  return res.json();
}
