import Table from "./table";

const Users = async ({
  searchParams: { sortOrder },
}: {
  searchParams: { sortOrder: string };
}) => {
  return (
    <>
      <h1>Users</h1>
      <Table sortOrder={sortOrder} />
    </>
  );
};
export default Users;
