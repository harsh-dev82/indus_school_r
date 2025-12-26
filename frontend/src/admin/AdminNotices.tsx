import AdminLayout from "../admin/AdminLayout";
import AdminPage from "../admin/AdminPage";

export default function AdminNotices() {
  return (
    <AdminLayout>
      <AdminPage title="Notices">

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            placeholder="Search notices..."
            className="border rounded-lg px-4 py-2 w-full md:w-64 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button className="bg-blue-700 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-800 transition">
            + Add Notice
          </button>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="p-4 rounded-lg border flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <p className="font-semibold">Football Match</p>
                <p className="text-sm text-gray-500">25 Dec 2025</p>
              </div>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          ))}
        </div>

      </AdminPage>
    </AdminLayout>
  );
}
