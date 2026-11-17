import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-gray-500">Sorry, the requested page was not found.</p>

      <Link
        href="/dashboard"
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
