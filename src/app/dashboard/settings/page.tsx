export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>

        <p className="text-sm text-gray-500">
          Manage your application preferences.
        </p>
      </div>

      <div className="max-w-xl space-y-4 rounded-xl border bg-white p-6">
        <div>
          <label className="text-sm font-medium">Application Name</label>

          <input
            defaultValue="EduPanel"
            className="mt-2 w-full rounded-lg border p-3 text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Administrator Email</label>

          <input
            defaultValue="admin@example.com"
            className="mt-2 w-full rounded-lg border p-3 text-sm"
          />
        </div>

        <button
          type="button"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
