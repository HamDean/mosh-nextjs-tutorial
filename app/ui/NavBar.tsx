import Link from "next/link"

const NavBar = () => {
  return (
    <div className="flex gap-6 bg-slate-800 p-3 mb-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/admin"}>Admin</Link>
        <Link href={"/api/auth/signin"}>Login in</Link>
    </div>
  )
}
export default NavBar