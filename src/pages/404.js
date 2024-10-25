import React from "react";

const ErrorPage = () => {
  const browser = typeof window !== "undefined" && window;

  return (
    <>
      {browser && (
        <>
            <h1>Page Not Found</h1>
        </>
      )}
    </>
  );
};

export default ErrorPage;