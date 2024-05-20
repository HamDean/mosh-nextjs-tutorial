"use client";

import Error from "next/error";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.log(error);
  return (
    <>
      <button className="btn btn-primary" onClick={() => reset()}>
        Retry
      </button>
      <div>Sorry, an unexpected error occured</div>
    </>
  );
};
export default ErrorPage;
