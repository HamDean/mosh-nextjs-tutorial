import Link from "next/link";
import { sort } from "fast-sort";

interface User {
    id: number;
    name: string;
    email: string;
  }

const Table = async ({ sortOrder}: { sortOrder: string}) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/xusers");
    const users: User[] = await res.json();
  
    const sortedUsers = sort(users).asc(
      user => sortOrder === 'email' ? user.email : user.name
    )
  return (
    <table className="table">
        <thead>
          <tr>
            <th className="cursor-pointer">
              <Link href={"/users?sortOrder=name"}>Name</Link>
            </th>
            <th className="cursor-pointer">
              <Link href={"/users?sortOrder=email"}>email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}
export default Table