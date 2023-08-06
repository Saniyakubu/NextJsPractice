import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export default async function Users() {
  const users: Promise<users[]> = getAllUsers();

  const userData = await users;

  return (
    <div>
      {userData.map((user) => {
        return (
          <h1 key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </h1>
        );
      })}
    </div>
  );
}
