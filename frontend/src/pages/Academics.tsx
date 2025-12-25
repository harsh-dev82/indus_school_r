import { motion } from "framer-motion";
import { useState } from "react";

const sections = [
  { id: "academics", title: "Academics", content: "Indus Public School is affiliated to CBSE Board in New Delhi till class XII. However, Class I to VIII follow a holistic school-based curriculum which is innovative and globally accepted. This enhances and encourages wider areas of learning." },
  { id: "curriculum", title: "Curriculum", content: "The school has a well-structured curriculum focusing on intellectual, emotional, social and physical development of students." },
  { id: "calendar", title: "School Calendar", content: "The academic calendar outlines important school events, examinations and holidays throughout the year." },
  { id: "methodologies", title: "Teaching Methodologies", content: "Our methodologies integrate experiential learning, digital classrooms, hands-on activities, and student-centered approaches for maximum engagement." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Academics() {
  const [active, setActive] = useState("academics");

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-blue-50 to-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 px-6">

        {/* Sidebar */}
        <motion.div 
          className="sticky top-32 h-fit bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                setActive(s.id);
              }}
              className={`w-full text-left px-5 py-4 mb-3 rounded-xl transition-all font-medium ${
                active === s.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 hover:bg-blue-50"
              }`}
            >
              {s.title}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="space-y-24">

          {sections.map((s, i) => (
            <motion.section
              id={s.id}
              key={s.id}
              className="bg-white rounded-3xl shadow-xl p-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6">
                {s.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {s.content}
              </p>
            </motion.section>
          ))}

        </div>
      </div>
    </div>
  );
}
