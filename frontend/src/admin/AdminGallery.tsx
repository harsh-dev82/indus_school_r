import AdminLayout from "../admin/AdminLayout";
import AdminPage from "../admin/AdminPage";

export default function AdminGallery() {
  return (
    <AdminLayout>
      <AdminPage title="Gallery">

        <div className="flex justify-end mb-6">
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition">
            Upload Image
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow hover:shadow-xl transition"
            >
              <div className="h-40 bg-gray-200" />
              <div className="p-3 text-center font-medium">Image {i}</div>
            </div>
          ))}
        </div>

      </AdminPage>
    </AdminLayout>
  );
}
