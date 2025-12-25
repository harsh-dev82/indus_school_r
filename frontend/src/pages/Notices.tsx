import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import bgImage from "../assets/gallery-banner.jpg";

interface Notice {
  id: number;
  title: string;
  description: string;
  file?: string;
  created_at: string;
}

const Notices: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get<Notice[]>("notices/")
      .then((res) => setNotices(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="pt-24 text-center text-lg text-gray-500">
        Loading notices...
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 text-center text-red-600">
        Failed to load notices. Please try again later.
      </div>
    );
  }

  return (
    <section
      className="min-h-screen flex justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(37,99,235,.7), rgba(17,24,39,.8)), url(${bgImage})`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-20">

        <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-10 animate-fadeUp">

          <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
            Notices & Circulars
          </h1>

          {notices.length === 0 ? (
            <p className="text-center text-gray-500">
              No notices available at the moment.
            </p>
          ) : (
            <div className="space-y-6">
              {notices.map((n) => (
                <Link
                  key={n.id}
                  to={`/notices/${n.id}`}
                  className="flex items-center gap-5 bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition"
                >
                  {n.file && (
                    <img
                      src={n.file}
                      alt={n.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  )}

                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {n.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(n.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Notices;
