import { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/gallery-banner.jpg";

const menu = [
  { key: "academics", label: "The School" },
  { key: "curriculum", label: "Academic Programme" },
  { key: "calendar", label: "School Calendar" },
  { key: "methods", label: "Teaching Methodologies" },
  { key: "staff", label: "Teaching & Leadership" },
  { key: "students", label: "Student Details" },
];

const content: any = {
  academics: {
    title: "The School",
    text: `Indus Public School is affiliated to CBSE Board in New Delhi till class XII.
However, Class I to VIII follow a holistic school based curriculum which is
innovative and internationally accepted.

Over the years, the school has grown steadily with a commitment to excellence,
providing students with a nurturing environment and strong academic foundation.`,
  },
  curriculum: {
    title: "Academic Programme",
    text: `Our academic programme is carefully designed to ensure intellectual,
emotional and social development of every child, preparing them for global
challenges and lifelong success.`,
  },
  calendar: {
    title: "School Calendar",
    text: `The academic calendar provides a yearly overview of important dates,
examinations, co-curricular activities and holidays for structured learning.`,
  },
  methods: {
    title: "Teaching Methodologies",
    text: `Teachers at Indus are dynamic mentors who use modern teaching practices,
interactive tools, real-life applications and performance-based strategies
to impart knowledge and nurture critical thinking.`,
  },
  staff: {
    title: "Teaching & Leadership",
    text: `Our faculty consists of highly qualified educators and experienced leaders
who are committed to the holistic growth and development of every student.`,
  },
  students: {
    title: "Student Details",
    text: `Students are encouraged to explore, discover and demonstrate learning
through multi-sensory experiences, creativity and collaborative engagement.`,
  },
};

export default function About() {
  const [active, setActive] = useState("academics");

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(37,99,235,.7), rgba(17,24,39,.85)), url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 grid md:grid-cols-4 gap-10">

          {/* Sidebar */}
          <motion.div
            className="bg-orange-500 text-white rounded-2xl shadow-lg p-6 space-y-2 sticky top-32 h-fit"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">ABOUT US</h3>

            {menu.map(item => (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  active === item.key
                    ? "bg-white text-orange-600 font-semibold shadow"
                    : "hover:bg-white/20"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>

          {/* Content Area */}
          <motion.div
            className="md:col-span-3 bg-white rounded-2xl shadow-lg p-10"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-extrabold text-blue-700 mb-6">
              {content[active].title}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {content[active].text}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
