import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Indus Public School
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100">
          Shaping future leaders through excellence in education,
          discipline, and strong moral values.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
            Apply for Admission
          </button>

          <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
