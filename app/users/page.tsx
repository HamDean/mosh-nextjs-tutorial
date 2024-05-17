import Link from "next/link";

interface User {
  id: number;
  name: string;
}

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: 'no-cache'
  });
  const users: User[] = await res.json();

  return (
    <>
      <div>Users</div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li> )}
      </ul>
      <Link href={"/users/userdetail"}>user detail</Link>
    </>
  );
};
export default Users;
