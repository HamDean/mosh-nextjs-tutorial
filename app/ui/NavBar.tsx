import Link from "next/link"

const NavBar = () => {
  return (
    <div className="flex gap-2 bg-slate-300 h-14 p-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/admin"}>Admin</Link>
    </div>
  )
}
export default NavBar