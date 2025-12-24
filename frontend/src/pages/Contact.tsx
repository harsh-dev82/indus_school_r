import { useState } from "react";
import banner from "../assets/contact.jpg";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"contact" | "map">("contact");

  return (
    <div className="pt-24">

      {/* Banner */}
      <div className="h-[55vh] w-full">
        <img src={banner} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6 py-16">

        {/* Left Menu */}
        <div className="bg-gray-100 rounded-lg p-4 space-y-3">
          <button
            onClick={() => setActiveTab("contact")}
            className={`w-full text-left px-4 py-3 rounded transition ${
              activeTab === "contact"
                ? "bg-white shadow text-blue-700 font-semibold"
                : "hover:bg-white"
            }`}
          >
            Contact Us
          </button>

          <button
            onClick={() => setActiveTab("map")}
            className={`w-full text-left px-4 py-3 rounded transition ${
              activeTab === "map"
                ? "bg-white shadow text-blue-700 font-semibold"
                : "hover:bg-white"
            }`}
          >
            Location Map
          </button>
        </div>

        {/* Right Content */}
        <div className="md:col-span-3 bg-white rounded-xl shadow p-8">

          {activeTab === "contact" && (
            <div className="space-y-8">

              <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>

              <div className="grid md:grid-cols-2 gap-8">

                <div>
                  <h3 className="font-semibold text-lg">Postal Address</h3>
                  <p className="mt-2">
                    <b>Indus Public School</b><br />
                    Delhi Road, Rohtak - 124001<br />
                    Haryana (India)
                  </p>

                  <p className="mt-4">
                    <b>Phone:</b><br />
                    +91-99929-00573<br />
                    +91-99929-00574
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Postal Address</h3>
                  <p className="mt-2">
                    <b>Indus Public School (Nursery Wing)</b><br />
                    96-A, Sindhu Bhawan, Subhash Nagar,<br />
                    Rohtak - 124001
                  </p>

                  <p className="mt-4">
                    <b>Phone:</b><br />
                    9992900573, 9992900574
                  </p>
                </div>

              </div>
            </div>
          )}

          {activeTab === "map" && (
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-6">
                Location Map
              </h2>

              <div className="w-full h-[500px] rounded-xl overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps?q=Indus+Public+School+Rohtak&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
