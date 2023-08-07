import getUser from '@/lib/getUser';
import getUserPost from '@/lib/getPost';
import UserPost from './components/Userpost';
import { Suspense } from 'react';
import { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import { notFound } from 'next/navigation';
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

  if (!user) {
    return {
      title: 'User Not Found',
    };
  }

  return {
    title: user?.name,
    description: `This is the page of ${user?.name}`,
  };
}

export default async function User({ params: { userId } }: Params) {
  const userData: Promise<users> = getUser(userId);
  const userPost: Promise<posts[]> = getUserPost(userId);

  const data = await userData;
  if (!data) {
    notFound();
  }
  return (
    <article>
      <h1>{data.name}</h1>;
      <Suspense fallback={<h2>Loading....</h2>}>
        <UserPost posts={userPost} />
      </Suspense>
    </article>
  );
}

export async function generateStaticParams() {
  const users: Promise<users[]> = getAllUsers();
  const userData = await users;
  return userData.map((user) => ({ userId: user.id.toString() }));
}
