import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Button variant="outline">Shadcn</Button>
      <Link href={"/users"}>users</Link>
    </main>
  );
}
