import { motion } from "framer-motion";
import { useState } from "react";
import banner from "../assets/beyond academics.jpg.jpg";

const sections = [
  {
    title: "Sports & Games",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/sports1.jpg",
    desc: "Indus Public School encourages physical development through various indoor and outdoor games that build discipline, leadership and teamwork."
  },
  {
    title: "Music & Dance",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/cultural1.jpg",
    desc: "Students explore creative expression through music, dance and performing arts to develop confidence and personality."
  },
  {
    title: "Art & Craft",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/art1.jpg",
    desc: "Artistic skills are nurtured through painting, craft, sculpture and creative workshops."
  },
  {
    title: "Clubs & Activities",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/activity1.jpg",
    desc: "Various student clubs develop leadership, innovation and social responsibility."
  }
];

export default function BeyondAcademics() {
  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-16"
      >
        Beyond Academics
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {sections.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={item.image}
              className="w-full h-52 object-cover"
              alt={item.title}
            />

            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-blue-700 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
