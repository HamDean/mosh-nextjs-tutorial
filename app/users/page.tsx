import Link from "next/link";
import Table from "./Table";
import { Suspense } from "react";

const Users = async ({
  searchParams: { sortOrder },
}: {
  searchParams: { sortOrder: string };
}) => {
  return (
    <>
      <h1>Users</h1>
      <Link href={"/users/new"} className="btn">
        Create
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <Table sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};
export default Users;
