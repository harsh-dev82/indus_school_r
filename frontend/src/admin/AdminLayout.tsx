import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white">
        <div className="p-6 text-xl font-bold border-b border-blue-700">
          Indus Admin
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-blue-700" : "hover:bg-blue-800"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/gallery"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-blue-700" : "hover:bg-blue-800"
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/admin/notices"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-blue-700" : "hover:bg-blue-800"
              }`
            }
          >
            Notices
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
