import { useEffect, useState } from "react";
import api from "../services/api";

interface Notice {
  id: number;
  title: string;
}

const NoticeMarquee = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    api.get("notices/")
      .then((res) => setNotices(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!notices.length) return null;

  return (
    <div className="bg-blue-800 text-white py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {notices.map((n) => (
          <span key={n.id} className="mx-10 font-medium">
            {n.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NoticeMarquee;
