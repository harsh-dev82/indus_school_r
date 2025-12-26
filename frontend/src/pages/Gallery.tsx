import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import bgImage from "../assets/gallery-banner.jpg";
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
    <section
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(37,99,235,.7), rgba(17,24,39,.8)), url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">

        <motion.div
          className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl
                     p-5 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 mb-8 sm:mb-10 text-center">
            School Gallery
          </h1>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
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
                  className="group border rounded-xl overflow-hidden
                             shadow hover:shadow-xl transition
                             block bg-white"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-40 sm:h-48 md:h-56 lg:h-64"
                  >
                    <img
                      src={img.images[0]?.image}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition"></div>
                  </motion.div>

                  <div className="p-4 sm:p-6 text-center">
                    <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                      {img.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {img.images.length} Photos
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;
