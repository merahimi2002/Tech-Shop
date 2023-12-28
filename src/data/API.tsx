import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

export function API() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <ul>
        {error && <p className="text-danger">{error}</p>}
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
