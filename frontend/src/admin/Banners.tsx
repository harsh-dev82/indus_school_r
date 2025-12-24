import { useState } from "react";
import api from "../services/api";

const Banners = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const uploadBanner = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    await api.post("banners/", formData);
    alert("Banner uploaded");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Upload Banner</h2>

      <input
        className="border p-3 w-full mb-4"
        placeholder="Banner Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="file"
        className="mb-4"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button onClick={uploadBanner} className="btn-primary">
        Upload
      </button>
    </div>
  );
};

export default Banners;
