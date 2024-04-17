import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { statusText, message } = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-600 p-8">
      <h1 className="text-2xl mb-4">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="italic mt-2">{statusText || message}</p>

      <Link to="/" className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
