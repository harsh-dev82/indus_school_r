import { motion } from "framer-motion";

const activities = [
  {
    title: "Classroom Activities",
    image: "/activities/classroom.jpg",
    desc: "Interactive classroom learning including group discussions, presentations and collaborative projects."
  },
  {
    title: "Cultural Activities",
    image: "/activities/cultural.jpg",
    desc: "Dance, music, drama and cultural festivals nurturing creativity and confidence."
  },
  {
    title: "Sports Activities",
    image: "/activities/sports.jpg",
    desc: "Indoor and outdoor sports promoting teamwork, discipline and physical fitness."
  },
  {
    title: "Educational Tours",
    image: "/activities/tour.jpg",
    desc: "Learning beyond classrooms through excursions, trips and industrial visits."
  }
];

export default function Activities() {
  return (
    <div className="pt-28 max-w-7xl mx-auto px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-16"
      >
        Activities
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {activities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-center border-t">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>
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
