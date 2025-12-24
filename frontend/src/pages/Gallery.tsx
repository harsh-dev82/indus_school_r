import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import banner from "../assets/gallery-banner.jpg"

interface GalleryImage {
  id: number;
  image: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
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

  if (loading) {
    return <p className="text-center mt-20">Loading gallery...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 mt-20">{error}</p>;
  }

  if (images.length === 0) {
    return <p className="text-center mt-20 text-gray-500">No images uploaded yet.</p>;
  }

  return (
    <div  style={{ marginTop: "5rem" }}>
      <div className="relative h-[70vh] w-full">
        <img
          src={banner}
          className="w-full h-full object-cover"
          alt="Gallery Banner"
        />
      </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6"  style={{ marginTop: "4rem" }}>
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
    </div>
  );
};
export default Gallery;
