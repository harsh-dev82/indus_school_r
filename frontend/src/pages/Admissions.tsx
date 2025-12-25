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
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(37,99,235,.7), rgba(17,24,39,.8)), url('/images/home3.jpg')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-2xl animate-fadeUp">

        <h2 className="text-4xl font-extrabold text-blue-700 mb-3 text-center">
          Admission Enquiry
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Fill the form below and our admission team will contact you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-style"
          />

          <input
            type="email"
            name="email"
            placeholder="Parent Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-style"
          />

          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-style"
          />

          <input
            type="text"
            name="class_applied"
            placeholder="Class Applying For"
            value={formData.class_applied}
            onChange={handleChange}
            required
            className="input-style"
          />

          <textarea
            name="message"
            placeholder="Your Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="input-style h-28 resize-none"
          />

          {status === "success" && (
            <p className="text-green-600 font-medium text-center">
              ✅ Enquiry submitted successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 font-medium text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800 hover:scale-[1.02]"
              }`}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admissions;
