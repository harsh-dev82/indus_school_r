import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import banner from "../assets/gallery-banner.jpg";
import { motion } from "framer-motion";

interface GalleryGroup {
  id: number;
  title: string;
  images: { id: number; image: string }[];
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("gallery/")
      .then((res) => {
        setImages(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load gallery. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-20">Loading gallery...</p>;
  if (error) return <p className="text-center text-red-600 mt-20">{error}</p>;
  if (images.length === 0)
    return <p className="text-center mt-20 text-gray-500">No images uploaded yet.</p>;

  return (
    <div style={{ marginTop: "5rem" }}>

      {/* Banner Animation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] w-full"
      >
        <img src={banner} className="w-full h-full object-cover" />
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6"
        style={{ marginTop: "4rem" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 }
          }
        }}
      >
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Link
              to={`/gallery/${img.id}`}
              className="group border rounded-xl overflow-hidden shadow hover:shadow-xl transition block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-64"
              >
                <img
                  src={img.images[0]?.image}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition"></div>
              </motion.div>

              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {img.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {img.images.length} Photos
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
