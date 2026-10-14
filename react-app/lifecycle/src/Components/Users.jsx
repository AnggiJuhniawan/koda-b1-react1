import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Effect dijalankan");
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          },
        );
        if (!response.ok) {
          throw new Error(`HTTPS ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        if (!controller.signal.aborted) {
          setUsers(data);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    getUsers();
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    console.log("Jumlah User: ", users.length);
  }, [users]);
  return (
    <section className="rounded-xl bg-white p-6 shadow">
      <h1 className="mb-4 text-2xl font-bold">Daftar Users</h1>

      {loading && <p className="text-blue-600">Loading users...</p>}
      {error && <p className="text-red-600">Gagal mengambil data: {error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <article key={user.id}>
              <h3 className="font-bold text-gray-800">{user.name}</h3>
              <p className="mt-2 break-all text-sm text-blue-600">
                {user.email}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Users;
