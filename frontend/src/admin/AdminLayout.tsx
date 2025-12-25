import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 h-full w-64 bg-blue-900 text-white transform transition-transform
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 text-2xl font-bold">Indus Admin</div>

        <nav className="space-y-2 px-4">
          {["Dashboard", "Banners", "Notices", "Gallery", "Enquiries"].map(item => (
            <a key={item} className="block px-4 py-3 rounded hover:bg-blue-700 transition">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-0 md:ml-64">

        {/* Top Bar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </header>

        {/* Content */}
        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}
