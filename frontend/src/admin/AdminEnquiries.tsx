import AdminLayout from "../admin/AdminLayout";
import AdminPage from "../admin/AdminPage";

export default function AdminEnquiries() {
  return (
    <AdminLayout>
      <AdminPage title="Enquiries">

        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="p-4 border rounded-lg flex justify-between hover:shadow-md transition"
            >
              <div>
                <p className="font-semibold">Harsh Chaudhary</p>
                <p className="text-sm text-gray-500">harsh@email.com</p>
              </div>
              <button className="text-blue-600 hover:underline">View</button>
            </div>
          ))}
        </div>

      </AdminPage>
    </AdminLayout>
  );
}
