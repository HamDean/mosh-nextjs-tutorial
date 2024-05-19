import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

const UserDetail = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetail {id}</div>;
};
export default UserDetail;
