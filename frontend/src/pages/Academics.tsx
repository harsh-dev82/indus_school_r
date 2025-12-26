import { motion } from "framer-motion";
import bgImage from "../assets/gallery-banner.jpg";

const sections = [
  {
    title: "Academics",
    text: "Indus Public School is affiliated to CBSE Board in New Delhi till class XII. However, Class I to VIII follow a holistic school based curriculum which is innovative and internationally accepted."
  },
  {
    title: "Curriculum",
    text: "The school has a well-structured curriculum focusing on intellectual, emotional, social and physical development of the students."
  },
  {
    title: "School Calendar",
    text: "The academic calendar outlines important school events, examinations and holidays throughout the year."
  },
  {
    title: "Teaching Methodologies",
    text: "Our teaching methodologies focus on interactive learning, critical thinking and student engagement through modern tools and practices."
  },
  {
    title: "Teaching Staff",
    text: "Highly qualified and experienced teachers dedicated to student success and personal development."
  },
  {
    title: "Student Details",
    text: "We ensure individual student progress, counseling and academic mentoring."
  }
];

export default function Academics() {
  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(37,99,235,.7), rgba(17,24,39,.85)), url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl
                        p-5 sm:p-8 lg:p-10
                        grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-10">

          {/* Sidebar */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg
                       p-4 sm:p-6 space-y-3
                       md:sticky md:top-32 h-fit"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {sections.map((s, i) => (
              <a
                key={i}
                href={`#${s.title.replace(/\s/g, "")}`}
                className="block px-4 py-3 rounded-lg text-gray-700
                           hover:bg-blue-50 hover:text-blue-700 transition
                           font-medium text-sm sm:text-base"
              >
                {s.title}
              </a>
            ))}
          </motion.div>

          {/* Content Area */}
          <div className="md:col-span-3 space-y-10 sm:space-y-14 lg:space-y-16">

            {sections.map((s, i) => (
              <motion.div
                key={i}
                id={s.title.replace(/\s/g, "")}
                className="bg-white rounded-2xl shadow-lg
                           p-5 sm:p-8 lg:p-10"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-700 mb-3 sm:mb-4">
                  {s.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {s.text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
