import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    api.get("gallery/").then((res) => setImages(res.data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {images.map((img: any) => (
        <Link
          key={img.id}
          to={`/gallery/${img.id}`}
          className="group border rounded-xl overflow-hidden shadow hover:shadow-xl transition"
        >
        <div className="relative h-64">
              <img
                src={img.images[0]?.image}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition"></div>
            </div>

            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {img.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {img.images.length} Photos
              </p>
            </div>
        </Link>
      ))}
    </div>
  );
};

export default GallerySection;
