import { useEffect, useState } from "react";
import api from "../services/api";

interface GalleryImage {
  id: number;
  title: string;
  image: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get<GalleryImage[]>("gallery/")
      .then((res) => setImages(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="pt-24 text-center text-lg text-gray-500">
        Loading gallery...
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 text-center text-red-600">
        Failed to load gallery. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 pt-24">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
        School Gallery
      </h1>

      {images.length === 0 ? (
        <p className="text-center text-gray-500">
          No images uploaded yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img) => (
            <div
              key={img.id}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={img.image}
                alt={img.title || "Gallery Image"}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />

              {img.title && (
                <div className="bg-white p-3 text-center">
                  <p className="text-sm font-medium text-gray-700">
                    {img.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
