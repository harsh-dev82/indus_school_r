import { useEffect, useState } from "react";
import api from "../services/api";

interface Notice {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

const NoticesAdmin = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchNotices = () => {
    api.get("notices/").then((res) => {
      setNotices(res.data);
    });
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      return alert("Title and description are required");
    }

    try {
      setLoading(true);
      await api.post("admin/notices/create/", {
        title,
        description,
      });
      setTitle("");
      setDescription("");
      fetchNotices();
      alert("Notice created successfully");
    } catch {
      alert("Failed to create notice");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this notice?")) return;
    await api.delete(`admin/notices/delete/${id}/`);
    fetchNotices();
  };

  return (
    <div className="space-y-10">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        Notice Management
      </h1>

      {/* Create Notice Card */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Create New Notice
        </h2>

        <form onSubmit={handleCreate} className="space-y-4">
          <input
            type="text"
            placeholder="Notice title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
          />

          <textarea
            placeholder="Notice description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full h-32 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
          >
            {loading ? "Saving..." : "Create Notice"}
          </button>
        </form>
      </div>

      {/* Notice List */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Published Notices
        </h2>

        {notices.length === 0 ? (
          <p className="text-gray-500">
            No notices found.
          </p>
        ) : (
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded shadow p-4 flex justify-between items-start"
              >
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-800">
                    {notice.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {notice.description}
                  </p>

                  <p className="text-xs text-gray-400">
                    {new Date(notice.created_at).toLocaleDateString()}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(notice.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticesAdmin;
