import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
  const [galleryCount, setGalleryCount] = useState(0);
  const [noticeCount, setNoticeCount] = useState(0);

  useEffect(() => {
    api.get("gallery/").then(res => setGalleryCount(res.data.length));
    api.get("notices/").then(res => setNoticeCount(res.data.length));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-gray-500">Gallery Images</h2>
          <p className="text-4xl font-bold text-blue-700">
            {galleryCount}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-gray-500">Notices</h2>
          <p className="text-4xl font-bold text-green-600">
            {noticeCount}
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
