import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const { status, statusText } = error;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-red-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Error</h1>
      <p className="text-2xl mb-2">OOOPPSSS, something went wrong!</p>
      <p className="text-lg">
        <span className="font-semibold">Error {status}:</span> {statusText}
      </p>
    </div>
  );
};

export default Error;

