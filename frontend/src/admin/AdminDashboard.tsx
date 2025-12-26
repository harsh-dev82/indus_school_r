import { motion } from "framer-motion";

export default function AdminDashboard() {
  const cards = [
    { title: "Gallery Images", value: 1, icon: "🖼️" },
    { title: "Notices", value: 1, icon: "🔔" },
    { title: "Banners", value: 3, icon: "🎯" },
    { title: "Enquiries", value: 12, icon: "📩" },
  ];

  return (
    <div className="p-6 md:p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Admin Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">{c.icon}</div>
            <p className="text-gray-500">{c.title}</p>
            <h2 className="text-3xl font-bold mt-1">{c.value}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
