"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export function NotFoundButtons() {
  return (
    <div className="mt-10 flex justify-center space-x-4">
      <Link
        href="/"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Home className="mr-2 h-5 w-5" />
        Go home
      </Link>
      <button
        onClick={() => window.history.back()}
        className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Go back
      </button>
    </div>
  );
}
