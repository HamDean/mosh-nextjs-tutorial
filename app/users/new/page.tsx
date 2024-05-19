"use client";

import { useRouter } from "next/navigation";

const CreateUser = () => {
  const router = useRouter();
  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      create
    </button>
  );
};
export default CreateUser;
