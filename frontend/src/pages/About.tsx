import { useEffect, useState } from "react";
import api from "../services/api";

interface PageData {
  title: string;
  content: string;
  image?: string;
}

const About: React.FC = () => {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api
//       .get("pages/about-us/")
//       .then((res) => {
//         setPage(res.data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <p className="text-red-500">Content not available</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 pt-24">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">
        {page.title}
      </h2>

      {page.image && (
        <img
          src={page.image}
          alt={page.title}
          className="w-full h-[380px] object-cover rounded-xl mb-6 shadow"
        />
      )}

      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {page.content}
      </div>
    </div>
  );
};

export default About;
