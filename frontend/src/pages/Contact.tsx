import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner from "../assets/contact.jpg";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"contact" | "map">("contact");

  return (
    <div className="pt-24">

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-[55vh] w-full"
      >
        <img src={banner} className="w-full h-full object-cover" />
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6 py-16">

        {/* Left Menu */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-100 rounded-lg p-4 space-y-3"
        >
          {["contact", "map"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`w-full text-left px-4 py-3 rounded transition ${
                activeTab === tab
                  ? "bg-white shadow text-blue-700 font-semibold"
                  : "hover:bg-white"
              }`}
            >
              {tab === "contact" ? "Contact Us" : "Location Map"}
            </button>
          ))}
        </motion.div>

        {/* Right Content */}
        <div className="md:col-span-3 bg-white rounded-xl shadow p-8">
          <AnimatePresence mode="wait">

            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <b>Indus Public School</b><br />
                    Delhi Road, Rohtak - 124001<br />
                    Haryana (India)

                    <p className="mt-4">
                      <b>Phone:</b><br />
                      +91-99929-00573<br />
                      +91-99929-00574
                    </p>
                  </div>

                  <div>
                    <b>Indus Public School (Nursery Wing)</b><br />
                    96-A, Sindhu Bhawan, Subhash Nagar,<br />
                    Rohtak - 124001

                    <p className="mt-4">
                      <b>Phone:</b><br />
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
              >
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
                  />
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
