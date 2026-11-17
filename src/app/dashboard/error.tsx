"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-red-600">Dashboard Error</h2>

      <p className="text-gray-500">
        {error.message || "Unable to load dashboard."}
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Retry
      </button>
    </div>
  );
}
