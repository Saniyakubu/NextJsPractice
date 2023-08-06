import getUser from '@/lib/getUser';
import getUserPost from '@/lib/getPost';
import UserPost from './components/Userpost';
import { Suspense } from 'react';
import { Metadata } from 'next';
type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<users> = getUser(userId);
  const user: users = await userData;
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function User({ params: { userId } }: Params) {
  const userData: Promise<users> = getUser(userId);
  const userPost: Promise<posts[]> = getUserPost(userId);

  const data = await userData;

  return (
    <article>
      <h1>{data.name}</h1>;
      <Suspense fallback={<h2>Loading....</h2>}>
        <UserPost posts={userPost} />
      </Suspense>
    </article>
  );
}
