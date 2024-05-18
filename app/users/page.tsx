import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <div>Users</div>
      <table className="table">
        <thead>
          <tr>
            <th className="cursor-pointer">Name</th>
            <th className="cursor-pointer">email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Users;
