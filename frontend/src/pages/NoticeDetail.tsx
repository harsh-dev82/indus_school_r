import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

interface Notice {
  id: number;
  title: string;
  description: string;
  file?: string;
  created_at: string;
  thumbnail?: string;
}

const NoticeDetail: React.FC = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Notice[]>("notices/")
      .then(res => {
        const found = res.data.find(n => n.id === Number(id));
        setNotice(found || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="pt-24 text-center">Loading...</div>;
  }

  if (!notice) {
    return <div className="pt-24 text-center text-red-500">Notice not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 pt-24">
      {notice.file && (
        <img
          src={notice.file}
          alt={notice.title}
          className="w-full h-96 object-cover rounded-xl shadow"
        />
      )}

      <h1 className="text-3xl font-bold mt-8 text-gray-800">
        {notice.title}
      </h1>

      <p className="text-sm text-gray-500 mt-2">
        {new Date(notice.created_at).toLocaleDateString()}
      </p>

      <div className="mt-6 text-lg text-gray-700 leading-relaxed">
        {notice.description}
      </div>
    </div>
  );
};

export default NoticeDetail;
