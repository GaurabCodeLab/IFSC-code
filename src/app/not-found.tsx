import { NotFoundButtons } from "@/components/ui/NotFoundButtons";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-gray-700">404</h1>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            Page not found
          </h2>
          <p className="mt-6 text-base text-gray-500">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or deleted.
          </p>
          <NotFoundButtons />
        </div>
      </div>
    </div>
  );
}
