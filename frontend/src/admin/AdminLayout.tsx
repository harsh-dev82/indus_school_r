import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Banners", path: "/admin/banners" },
  { name: "Notices", path: "/admin/notices" },
  { name: "Gallery", path: "/admin/gallery" },
  { name: "Enquiries", path: "/admin/enquiries" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden">

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -260 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed md:static z-40 h-full w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white shadow-xl
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-6 text-2xl font-bold tracking-wide">Indus Admin</div>

        <nav className="mt-6 space-y-2 px-4">
          {menu.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-white/20 font-semibold"
                    : "hover:bg-white/10"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </motion.aside>

      {/* Main Area */}
      <div className="flex-1 md:ml-64 flex flex-col">

        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <button
            className="md:hidden text-2xl text-blue-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </header>

        {/* Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 p-6"
        >
          {children}
        </motion.main>

      </div>
    </div>
  );
}
