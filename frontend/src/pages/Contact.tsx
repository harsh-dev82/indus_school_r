import { useState } from "react";
import api from "../services/api";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      await api.post("contact/", data);
      setSent(true);
      e.currentTarget.reset();
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We would love to hear from you.</p>

      {sent && (
        <div className="success-message">
          ✅ Message sent successfully!  
          We will get back to you soon.
        </div>
      )}

      <div className="contact-container">
        <div className="contact-info">
          <h2>School Address</h2>
          <p>Indus School</p>
          <p>Sector 45, Chandigarh, India</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@indusschool.com</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Message</h2>

          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <input name="phone" type="tel" placeholder="Your Phone" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="map">
        <iframe
          title="Indus School Location"
          src="https://www.google.com/maps?q=Chandigarh%20India&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
