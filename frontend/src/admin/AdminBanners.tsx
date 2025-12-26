import { motion } from "framer-motion";

export default function AdminBanners() {
  return (
    <div className="p-6 md:p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Manage Banners
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <p className="text-gray-500 mb-6">
          Upload and manage homepage banners
        </p>

        <div className="border-2 border-dashed rounded-xl p-10 text-center">
          <p className="text-gray-500 mb-4">Drop banner image here</p>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Upload Banner
          </button>
        </div>
      </motion.div>
    </div>
  );
}
