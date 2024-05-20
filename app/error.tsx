"use client";

import Error from "next/error";

const ErrorPage = ({ error }: { error: Error }) => {
  console.log(error);
  return <div>Sorry, an unexpected error occured</div>;
};
export default ErrorPage;
