"use client";
import "./globals.css";
import { useState } from "react";

interface ErrorWrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <div>
      {/* <button
        title="Simulate an Error"
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => setError(true)}
      >
        Simulate Error
      </button> */}
    </div>
  );
};

export default function ErrorWrapper({ children }: ErrorWrapperProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute top-0 left-4 -translate-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
