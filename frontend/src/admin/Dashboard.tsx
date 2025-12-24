import { useEffect, useState } from "react";
import { FiImage, FiBell } from "react-icons/fi";
import api from "../services/api";

const Dashboard = () => {
  const [galleryCount, setGalleryCount] = useState(0);
  const [noticeCount, setNoticeCount] = useState(0);

  useEffect(() => {
    api.get("gallery/").then((res) => setGalleryCount(res.data.length));
    api.get("notices/").then((res) => setNoticeCount(res.data.length));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Gallery Images</h2>
              <p className="text-4xl font-bold text-blue-700 mt-2">
                {galleryCount}
              </p>
            </div>
            <FiImage className="text-4xl text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Notices</h2>
              <p className="text-4xl font-bold text-green-600 mt-2">
                {noticeCount}
              </p>
            </div>
            <FiBell className="text-4xl text-green-600" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
