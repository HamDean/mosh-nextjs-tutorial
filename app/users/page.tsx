import Link from "next/link";
import Table from "./Table";

const Users = async ({
  searchParams: { sortOrder },
}: {
  searchParams: { sortOrder: string };
}) => {
  return (
    <>
      <h1>Users</h1>
      <Link href={'/users/new'} className="btn">Create</Link>
      <Table sortOrder={sortOrder} />
    </>
  );
};
export default Users;
