import Link from "next/link"

const Users = () => {
  return (
    <>
    <div>Users</div>
    <Link href={'/users/userdetail'}>user detail</Link>
    </>
  )
}
export default Users