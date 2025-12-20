import { useEffect, useState } from "react";
import api from "../services/api";

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
    <div className="max-w-6xl mx-auto px-6 py-10 pt-24">
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
            <div
              key={n.id}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {n.title}
              </h2>

              {n.description && (
                <p className="text-gray-600 mt-2">
                  {n.description}
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">
                <span className="text-sm text-gray-400">
                  Published on{" "}
                  {new Date(n.created_at).toLocaleDateString()}
                </span>

                {n.file && (
                  <a
                    href={n.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-blue-700 hover:underline"
                  >
                    📄 Download Notice
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notices;
