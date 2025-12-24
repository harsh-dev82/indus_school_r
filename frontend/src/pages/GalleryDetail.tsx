import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function GalleryDetail() {
  const { id } = useParams();
  const [gallery, setGallery] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    api.get("/gallery/").then(res => {
      const selected = res.data.find(g => g.id == id);
      setGallery(selected);
    });
  }, [id]);

  if (!gallery) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16" style={{ marginTop: "6rem" }}>

      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        {gallery.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.images.map(img => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img.image)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={img.image}
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* 🔲 Fullscreen Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}

    </div>
  );
}