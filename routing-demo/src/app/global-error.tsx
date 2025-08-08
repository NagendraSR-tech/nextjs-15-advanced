"use client"; //error boundaries must be client components
import "./globals.css";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">
            Something went wrong (Global Error Handler)
          </h2>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
