import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-10">Indus Admin</h2>

        <nav className="space-y-4">
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/banners">Banners</NavLink>
          <NavLink to="/admin/notices">Notices</NavLink>
          <NavLink to="/admin/gallery">Gallery</NavLink>
          <NavLink to="/admin/enquiries">Enquiries</NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;
