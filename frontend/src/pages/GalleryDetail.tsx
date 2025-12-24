import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../services/api";

export default function GalleryDetail() {
  const { id } = useParams();
  const [gallery, setGallery] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    api.get("/gallery/").then(res => {
      const selected = res.data.find((g: any) => g.id == id);
      setGallery(selected);
    });
  }, [id]);

  if (!gallery) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16" style={{ marginTop: "6rem" }}>

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-blue-700"
      >
        {gallery.title}
      </motion.h1>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } }
        }}
      >
        {gallery.images.map((img: any) => (
          <motion.div
            key={img.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedImage(img.image)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img.image}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 🔲 Fullscreen Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
