import { motion } from "framer-motion";

export default function AdminPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <div className="bg-white rounded-xl shadow-lg p-6">{children}</div>
    </motion.div>
  );
}
