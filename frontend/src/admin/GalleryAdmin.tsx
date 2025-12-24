import { useEffect, useState } from "react";
import api from "../services/api";

interface GalleryImage {
  id: number;
  image: string;
}

const GalleryAdmin = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    const res = await api.get("gallery/");
    setImages(res.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      await api.post("gallery/upload/", formData);
      setFile(null);
      setPreview(null);
      fetchImages();
    } catch {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this image?")) return;
    await api.delete(`gallery/${id}/`);
    fetchImages();
  };

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-gray-800">
        Gallery Management
      </h1>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-xl shadow max-w-lg">
        <h2 className="text-lg font-semibold mb-4">
          Upload New Image
        </h2>

        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const selected = e.target.files?.[0] || null;
              setFile(selected);
              if (selected) setPreview(URL.createObjectURL(selected));
            }}
          />

          {preview && (
            <img
              src={preview}
              className="h-40 rounded border object-cover"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </form>
      </div>

      {/* Gallery Grid */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Uploaded Images
        </h2>

        {images.length === 0 ? (
          <p className="text-gray-500">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img.id}
                className="bg-white rounded-xl shadow overflow-hidden"
              >
                <img
                  src={img.image}
                  className="w-full h-48 object-cover"
                />

                <div className="p-3 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Image #{img.id}
                  </span>

                  <button
                    onClick={() => handleDelete(img.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryAdmin;
