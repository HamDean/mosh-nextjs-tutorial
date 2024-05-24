"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex gap-6 bg-slate-800 p-3 mb-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/admin"}>Admin</Link>
      {status === "authenticated" ? (
        <div>
          {session?.user?.name?.split(" ")[1]}
          <Link href={"/api/auth/signout"}> Sign out</Link>
        </div>
      ) : (
        <Link href={"/api/auth/signin"}>Login in</Link>
      )}
    </div>
  );
};
export default NavBar;
