import { useState } from "react";
import api from "../services/api";

interface AdmissionFormData {
  name: string;
  email: string;
  phone: string;
  class_applied: string; 
  message: string;
}

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    name: "",
    email: "",
    phone: "",
    class_applied: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await api.post("admissions-enquiry/", formData);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", class_applied: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      <h2 className="text-4xl font-bold text-blue-700 mb-2">
        Admission Enquiry
      </h2>
      <p className="text-gray-600 mb-6">
        Fill the form below and our admission team will contact you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="email"
          name="email"
          placeholder="Parent Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="text"
          placeholder="Class Applying For"
          value={formData.class_applied}
          onChange={(e) =>
            setFormData({ ...formData, class_applied: e.target.value })
          }
        />


        <textarea
          name="message"
          placeholder="Your Message (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {status === "success" && (
          <p className="text-green-600 font-medium">
            ✅ Enquiry submitted successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 font-medium">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white px-6 py-3 rounded font-semibold transition
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
            }`}
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default Admissions;
