import Loading from '@/components/Loading/Loading';
import useFetchUsers from '@/hooks/useFetchUsers';

export default function Admin() {
  const { users, isFetching } = useFetchUsers();

  if (isFetching) return <Loading />;

  return (
    <div>
      <header>
        <h2>Admin Dashboard</h2>
      </header>
      <main>
        <section>
          <h3>Users</h3>
          <ul>
            {users?.map((user, idx) => (
              <li key={user.id}>
                {idx + 1}.- {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
