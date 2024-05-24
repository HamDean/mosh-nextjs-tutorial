import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

const UserDetail = async ({ params: { id } }: Props) => {
  
  if (id > 10) notFound();
  return <div>UserDetail {id}</div>;
};
export default UserDetail;
