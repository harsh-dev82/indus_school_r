import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../assets/contact.jpg";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"contact" | "map">("contact");

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(37,99,235,.7), rgba(17,24,39,.85)), url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-28">

        <motion.div
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Left Menu */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50/70 p-6 space-y-3"
          >
            {["contact", "map"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  activeTab === tab
                    ? "bg-white shadow text-blue-700 font-semibold"
                    : "hover:bg-white"
                }`}
              >
                {tab === "contact" ? "Contact Information" : "Location Map"}
              </button>
            ))}
          </motion.div>

          {/* Content Area */}
          <div className="md:col-span-3 p-10">
            <AnimatePresence mode="wait">

              {activeTab === "contact" && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-10"
                >
                  <h2 className="text-4xl font-extrabold text-blue-700">
                    Contact Us
                  </h2>

                  <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">

                    <div className="space-y-3">
                      <p className="font-semibold text-gray-900">
                        Indus Public School
                      </p>
                      <p>Delhi Road, Rohtak - 124001</p>
                      <p>Haryana, India</p>

                      <p className="pt-4">
                        <strong>Phone</strong><br />
                        +91-99929-00573<br />
                        +91-99929-00574
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="font-semibold text-gray-900">
                        Indus Public School (Nursery Wing)
                      </p>
                      <p>96-A, Sindhu Bhawan</p>
                      <p>Subhash Nagar, Rohtak - 124001</p>

                      <p className="pt-4">
                        <strong>Phone</strong><br />
                        9992900573, 9992900574
                      </p>
                    </div>

                  </div>
                </motion.div>
              )}

              {activeTab === "map" && (
                <motion.div
                  key="map"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl font-extrabold text-blue-700">
                    Location Map
                  </h2>

                  <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border">
                    <iframe
                      src="https://www.google.com/maps?q=Indus+Public+School+Rohtak&output=embed"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      style={{ border: 0 }}
                    />
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
